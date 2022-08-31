import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { DiseaseDto } from './dto';
import { Disease } from './types';

@Injectable()
export class DiseaseService {
  constructor(private prisma: PrismaService) {}

  async getDiseaseById(id: number): Promise<Disease | null> {
    return await this.prisma.disease.findUnique({
      where: {
        idDisease: Number(id),
      },
    });
  }

  async getDiseases() {
    return await this.prisma.disease.findMany();
  }

  async createDisease(dto: DiseaseDto): Promise<Disease> {
    return await this.prisma.disease.create({
      data: {
        nameDisease: dto.nameDisease,
        detailsDisease: dto.detailsDisease,
      },
    });
  }

  async updateDiseaseById(id: number, dto: DiseaseDto): Promise<Disease> {
    return await this.prisma.disease.update({
      data: {
        nameDisease: dto.nameDisease,
        detailsDisease: dto.detailsDisease,
      },
      where: {
        idDisease: Number(id),
      },
    });
  }

  async deleteDiseaseById(id: number): Promise<Disease> {
    return await this.prisma.disease.delete({
      where: {
        idDisease: Number(id),
      },
    });
  }
}
