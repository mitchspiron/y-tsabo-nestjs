import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { DoctorDto, DoctorPasswordDto } from './dto';
import { Doctor, DoctorPassword } from './types';
import * as bcrypt from 'bcrypt';

@Injectable()
export class DoctorService {
  constructor(private prisma: PrismaService) {}

  async getDoctorById(id: number): Promise<Doctor | null> {
    return await this.prisma.doctor.findUnique({
      where: {
        idDoctor: Number(id),
      },
    });
  }

  async getDoctors() {
    return await this.prisma.doctor.findMany({
      select: {
        idDoctor: true,
        matriculeDoctor: true,
        lastnameDoctor: true,
        firstnameDoctor: true,
        emailDoctor: true,
        phoneDoctor: true,
        addressDoctor: true,
        doctorspeciality: {
          select: {
            idSpeciality: true,
            nameSpeciality: true,
          },
        },
      },
    });
  }

  async updateDoctorById(id: number, dto: DoctorDto): Promise<Doctor> {
    return await this.prisma.doctor.update({
      data: {
        matriculeDoctor: dto.matriculeDoctor,
        lastnameDoctor: dto.lastnameDoctor,
        firstnameDoctor: dto.firstnameDoctor,
        emailDoctor: dto.emailDoctor,
        phoneDoctor: dto.phoneDoctor,
        addressDoctor: dto.addressDoctor,
        speciality: Number(dto.speciality),
      },
      where: {
        idDoctor: Number(id),
      },
    });
  }

  hashData(data: string) {
    return bcrypt.hash(data, 10);
  }

  async getPasswordDoctorById(id: number): Promise<DoctorPassword | null> {
    return await this.prisma.doctor.findUnique({
      where: {
        idDoctor: Number(id),
      },
      select: {
        passwordDoctor: true,
      },
    });
  }

  async updateDoctorPassword(
    id: number,
    dto: DoctorPasswordDto,
  ): Promise<DoctorPassword> {
    const hash = await this.hashData(dto.passwordDoctor);
    return await this.prisma.doctor.update({
      data: {
        passwordDoctor: hash,
      },
      where: {
        idDoctor: Number(id),
      },
    });
  }

  async deleteDoctorById(id: number): Promise<Doctor> {
    return await this.prisma.doctor.delete({
      where: {
        idDoctor: Number(id),
      },
    });
  }
}
