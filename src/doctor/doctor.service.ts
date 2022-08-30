import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { DoctorDto, DoctorPasswordDto } from './dto';
import { Doctor, DoctorPassword } from './types';

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
    return await this.prisma.doctor.findMany();
  }

  async updateDoctorById(id: number, dto: DoctorDto): Promise<Doctor> {
    return await this.prisma.doctor.update({
      data: {
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

  async updateDoctorPassword(
    id: number,
    dto: DoctorPasswordDto,
  ): Promise<DoctorPassword> {
    return await this.prisma.doctor.update({
      data: {
        passwordDoctor: dto.passwordDoctor,
      },
      where: {
        idDoctor: Number(id),
      },
    });
  }

  async deleteBookById(id: number): Promise<Doctor> {
    return await this.prisma.doctor.delete({
      where: {
        idDoctor: Number(id),
      },
    });
  }
}
