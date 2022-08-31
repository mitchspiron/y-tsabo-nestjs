import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { DoctorSpecialityDto } from './dto';
import { DoctorSpeciality } from './types';

@Injectable()
export class DoctorSpecialityService {
  constructor(private prisma: PrismaService) {}

  async getDoctorSpecialityById(id: number): Promise<DoctorSpeciality | null> {
    return await this.prisma.doctorspeciality.findUnique({
      where: {
        idSpeciality: Number(id),
      },
    });
  }

  async getDoctorSpecialities() {
    return await this.prisma.doctorspeciality.findMany();
  }

  async createDoctorSpeciality(
    dto: DoctorSpecialityDto,
  ): Promise<DoctorSpeciality> {
    return await this.prisma.doctorspeciality.create({
      data: {
        nameSpeciality: dto.nameSpeciality,
      },
    });
  }

  async updateDoctorSpecialityById(
    id: number,
    dto: DoctorSpecialityDto,
  ): Promise<DoctorSpeciality> {
    return await this.prisma.doctorspeciality.update({
      data: {
        nameSpeciality: dto.nameSpeciality,
      },
      where: {
        idSpeciality: Number(id),
      },
    });
  }

  async deleteDoctorSpecialityById(id: number): Promise<DoctorSpeciality> {
    return await this.prisma.doctorspeciality.delete({
      where: {
        idSpeciality: Number(id),
      },
    });
  }
}
