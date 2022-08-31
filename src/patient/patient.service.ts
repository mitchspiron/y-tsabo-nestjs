import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PatientDto, PatientPasswordDto } from './dto';
import { Patient, PatientPassword } from './types';
import * as bcrypt from 'bcrypt';

@Injectable()
export class PatientService {
  constructor(private prisma: PrismaService) {}

  async getPatientById(id: number): Promise<Patient | null> {
    return await this.prisma.patient.findUnique({
      where: {
        idPatient: Number(id),
      },
    });
  }

  async getPatients() {
    return await this.prisma.patient.findMany();
  }

  async updatePatientById(id: number, dto: PatientDto): Promise<Patient> {
    return await this.prisma.patient.update({
      data: {
        lastnamePatient: dto.lastnamePatient,
        firstnamePatient: dto.firstnamePatient,
        emailPatient: dto.emailPatient,
        phonePatient: dto.phonePatient,
        addressPatient: dto.addressPatient,
      },
      where: {
        idPatient: Number(id),
      },
    });
  }

  hashData(data: string) {
    return bcrypt.hash(data, 10);
  }

  async getPasswordPatientById(id: number): Promise<PatientPassword | null> {
    return await this.prisma.patient.findUnique({
      where: {
        idPatient: Number(id),
      },
      select: {
        passwordPatient: true,
      },
    });
  }

  async updatePatientPassword(
    id: number,
    dto: PatientPasswordDto,
  ): Promise<PatientPassword> {
    const hash = await this.hashData(dto.passwordPatient);
    return await this.prisma.patient.update({
      data: {
        passwordPatient: hash,
      },
      where: {
        idPatient: Number(id),
      },
    });
  }

  async deletePatientById(id: number): Promise<Patient> {
    return await this.prisma.patient.delete({
      where: {
        idPatient: Number(id),
      },
    });
  }
}
