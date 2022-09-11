import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { AuthPatientDtoSignin, AuthPatientDtoSignup } from './dto';
import { PatientTokens, Tokens } from './types';

@Injectable()
export class AuthPatientService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async signupLocal(dto: AuthPatientDtoSignup): Promise<PatientTokens> {
    const hash = await this.hashData(dto.passwordPatient);

    const patientEmail = await this.prisma.patient.findUnique({
      where: {
        emailPatient: dto.emailPatient,
      },
    });

    if (patientEmail)
      throw new ForbiddenException('This email belongs to an existing patient');

    const newPatient = await this.prisma.patient.create({
      data: {
        lastnamePatient: dto.lastnamePatient,
        firstnamePatient: dto.firstnamePatient,
        emailPatient: dto.emailPatient,
        phonePatient: dto.phonePatient,
        addressPatient: dto.addressPatient,
        sexePatient: dto.sexePatient,
        agePatient: Number(dto.agePatient),
        passwordPatient: hash,
      },
    });

    const tokens = await this.getTokens(
      newPatient.idPatient,
      newPatient.emailPatient,
    );
    await this.updateRtHash(newPatient.idPatient, tokens.refresh_token);

    return [newPatient, tokens];
  }

  async signinLocal(dto: AuthPatientDtoSignin): Promise<PatientTokens> {
    const patient = await this.prisma.patient.findUnique({
      where: {
        emailPatient: dto.emailPatient,
      },
    });

    if (!patient) throw new ForbiddenException('Access Denied');

    const passwordMatches = await bcrypt.compare(
      dto.passwordPatient,
      patient.passwordPatient,
    );
    if (!passwordMatches) throw new ForbiddenException('Access Denied');

    const tokens = await this.getTokens(
      patient.idPatient,
      patient.emailPatient,
    );
    await this.updateRtHash(patient.idPatient, tokens.refresh_token);

    return [patient, tokens];
  }

  async logout(idPatient: number) {
    await this.prisma.patient.updateMany({
      where: {
        idPatient: idPatient,
        rtPatient: {
          not: null,
        },
      },
      data: {
        rtPatient: null,
      },
    });
  }

  async refreshTokens(idPatient: number, rt: string) {
    const patient = await this.prisma.patient.findUnique({
      where: {
        idPatient,
      },
    });

    if (!patient || !patient.rtPatient)
      throw new ForbiddenException('Access Denied');

    const rtMatches = await bcrypt.compare(rt, patient.rtPatient);
    if (!rtMatches) throw new ForbiddenException('Access Denied');

    const tokens = await this.getTokens(
      patient.idPatient,
      patient.emailPatient,
    );
    await this.updateRtHash(patient.idPatient, tokens.refresh_token);

    return tokens;
  }

  async updateRtHash(idPatient: number, rt: string) {
    const hash = await this.hashData(rt);
    await this.prisma.patient.update({
      where: {
        idPatient,
      },
      data: {
        rtPatient: hash,
      },
    });
  }

  hashData(data: string) {
    return bcrypt.hash(data, 10);
  }

  async getTokens(idPatient: number, emailPatient: string): Promise<Tokens> {
    const [at, rt] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: idPatient,
          emailPatient,
        },
        {
          secret: 'at-secret',
          expiresIn: 60 * 15,
        },
      ),
      this.jwtService.signAsync(
        {
          sub: idPatient,
          emailPatient,
        },
        {
          secret: 'rt-secret',
          expiresIn: 60 * 60 * 24 * 7,
        },
      ),
    ]);

    return {
      access_token: at,
      refresh_token: rt,
    };
  }
}
