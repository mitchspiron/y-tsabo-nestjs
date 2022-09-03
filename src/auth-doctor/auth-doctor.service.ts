import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuthDoctorDtoSignin, AuthDoctorDtoSignup } from './dto';
import * as bcrypt from 'bcrypt';
import { Tokens, DoctorTokens } from './types';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthDoctorService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async signupLocal(dto: AuthDoctorDtoSignup): Promise<DoctorTokens> {
    const hash = await this.hashData(dto.passwordDoctor);
    const speciality = Number(dto.speciality);

    const doctorMatricule = await this.prisma.doctor.findUnique({
      where: {
        matriculeDoctor: dto.matriculeDoctor,
      },
    });

    const doctorEmail = await this.prisma.doctor.findUnique({
      where: {
        emailDoctor: dto.emailDoctor,
      },
    });

    if (doctorEmail || doctorMatricule)
      throw new ForbiddenException(
        'This matricule or email belongs to an existing doctor',
      );

    const newDoctor = await this.prisma.doctor.create({
      data: {
        matriculeDoctor: dto.matriculeDoctor,
        lastnameDoctor: dto.lastnameDoctor,
        firstnameDoctor: dto.firstnameDoctor,
        emailDoctor: dto.emailDoctor,
        phoneDoctor: dto.phoneDoctor,
        addressDoctor: dto.addressDoctor,
        speciality,
        passwordDoctor: hash,
      },
    });

    const tokens = await this.getTokens(
      newDoctor.idDoctor,
      newDoctor.emailDoctor,
    );
    await this.updateRtHash(newDoctor.idDoctor, tokens.refresh_token);

    return [newDoctor, tokens];
  }

  async signinLocal(dto: AuthDoctorDtoSignin): Promise<Tokens> {
    const doctor = await this.prisma.doctor.findUnique({
      where: {
        emailDoctor: dto.emailDoctor,
      },
    });

    if (!doctor) throw new ForbiddenException('Access Denied');

    const passwordMatches = await bcrypt.compare(
      dto.passwordDoctor,
      doctor.passwordDoctor,
    );
    if (!passwordMatches) throw new ForbiddenException('Access Denied');

    const tokens = await this.getTokens(doctor.idDoctor, doctor.emailDoctor);
    await this.updateRtHash(doctor.idDoctor, tokens.refresh_token);

    return tokens;
  }

  async logout(idDoctor: number) {
    await this.prisma.doctor.updateMany({
      where: {
        idDoctor: idDoctor,
        rtDoctor: {
          not: null,
        },
      },
      data: {
        rtDoctor: null,
      },
    });
  }

  async refreshTokens(idDoctor: number, rt: string) {
    const doctor = await this.prisma.doctor.findUnique({
      where: {
        idDoctor,
      },
    });

    if (!doctor || !doctor.rtDoctor)
      throw new ForbiddenException('Access Denied');

    const rtMatches = await bcrypt.compare(rt, doctor.rtDoctor);
    if (!rtMatches) throw new ForbiddenException('Access Denied');

    const tokens = await this.getTokens(doctor.idDoctor, doctor.emailDoctor);
    await this.updateRtHash(doctor.idDoctor, tokens.refresh_token);

    return tokens;
  }

  async updateRtHash(idDoctor: number, rt: string) {
    const hash = await this.hashData(rt);
    await this.prisma.doctor.update({
      where: {
        idDoctor,
      },
      data: {
        rtDoctor: hash,
      },
    });
  }

  hashData(data: string) {
    return bcrypt.hash(data, 10);
  }

  async getTokens(idDoctor: number, emailDoctor: string): Promise<Tokens> {
    const [at, rt] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: idDoctor,
          emailDoctor,
        },
        {
          secret: 'at-secret',
          expiresIn: 60 * 15,
        },
      ),
      this.jwtService.signAsync(
        {
          sub: idDoctor,
          emailDoctor,
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
