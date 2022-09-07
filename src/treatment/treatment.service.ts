import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { TreatmentDto } from './dto';
import { Treatment, TreatmentUpdate } from './types';
import * as moment from 'moment';

@Injectable()
export class TreatmentService {
  constructor(private prisma: PrismaService) {}

  async getTreatmentPatientById(id: number) {
    return await this.prisma.treatment.findMany({
      where: {
        patient: Number(id),
      },
      select: {
        dateTreatment: true,
        doctor_doctorTotreatment: {
          select: {
            idDoctor: true,
            firstnameDoctor: true,
            lastnameDoctor: true,
          },
        },
        disease_diseaseTotreatment: {
          select: {
            idDisease: true,
            nameDisease: true,
          },
        },
        isTreated: true,
      },
    });
  }

  async getTreatmentDoctorById(id: number) {
    return await this.prisma.treatment.findMany({
      where: {
        doctor: Number(id),
      },
      select: {
        dateTreatment: true,
        patient_patientTotreatment: {
          select: {
            idPatient: true,
            firstnamePatient: true,
            lastnamePatient: true,
          },
        },
        disease_diseaseTotreatment: {
          select: {
            idDisease: true,
            nameDisease: true,
          },
        },
        isTreated: true,
      },
    });
  }

  changeTimeZone(date, timeZone) {
    if (typeof date === 'string') {
      return new Date(
        new Date(date).toLocaleString('en-US', {
          timeZone,
        }),
      );
    }

    return new Date(
      date.toLocaleString('en-US', {
        timeZone,
      }),
    );
  }

  async createTreatment(dto: TreatmentDto): Promise<Treatment> {
    const date = moment().format('DD-MM-YYYY HH:mm:ss');
    return await this.prisma.treatment.create({
      data: {
        dateTreatment: date,
        patient: Number(dto.patient),
        doctor: Number(dto.doctor),
        disease: Number(dto.disease),
        isTreated: false,
      },
    });
  }

  async updateTreatmentById(
    id: number,
    dto: TreatmentDto,
  ): Promise<TreatmentUpdate> {
    return await this.prisma.treatment.update({
      data: {
        patient: Number(dto.patient),
        doctor: Number(dto.doctor),
        disease: Number(dto.disease),
      },
      where: {
        idTreatment: Number(id),
      },
    });
  }

  async updateTreatmentStateToTreated(id: number): Promise<Treatment> {
    return await this.prisma.treatment.update({
      data: {
        isTreated: true,
      },
      where: {
        idTreatment: Number(id),
      },
    });
  }

  async deleteTreatmentById(id: number): Promise<Treatment> {
    return await this.prisma.treatment.delete({
      where: {
        idTreatment: Number(id),
      },
    });
  }
}
