import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AppointmentDto } from './dto';
import { Appointment } from './types';

@Injectable()
export class AppointmentService {
  constructor(private prisma: PrismaService) {}

  async createAppointment(dto: AppointmentDto): Promise<Appointment> {
    return await this.prisma.appointment.create({
      data: {
        dateAppointment: dto.dateAppointment,
        timeAppointment: dto.timeAppointment,
        patient: Number(dto.patient),
        doctor: Number(dto.doctor),
        isValid: false,
      },
    });
  }

  async getAppointmentPatientById(id: number) {
    const patientAppointment = await this.prisma.appointment.findMany({
      select: {
        idAppointment: true,
        dateAppointment: true,
        timeAppointment: true,
        isValid: true,
        doctor_appointmentTodoctor: {
          select: {
            idDoctor: true,
            lastnameDoctor: true,
            firstnameDoctor: true,
            emailDoctor: true,
            phoneDoctor: true,
          },
        },
      },
      where: {
        patient: Number(id),
      },
    });

    if (!patientAppointment)
      throw new ForbiddenException('There is no appointment');

    return patientAppointment;
  }

  async getAppointmentByDoctorId(id: number) {
    const doctorAppointment = await this.prisma.appointment.findMany({
      select: {
        idAppointment: true,
        dateAppointment: true,
        timeAppointment: true,
        isValid: true,
        patient_appointmentTopatient: {
          select: {
            idPatient: true,
            lastnamePatient: true,
            firstnamePatient: true,
            emailPatient: true,
            phonePatient: true,
          },
        },
      },
      where: {
        doctor: Number(id),
      },
    });

    if (!doctorAppointment)
      throw new ForbiddenException('There is no appointment');

    return doctorAppointment;
  }

  async updateAppointmentById(
    id: number,
    dto: AppointmentDto,
  ): Promise<Appointment> {
    return await this.prisma.appointment.update({
      data: {
        dateAppointment: dto.dateAppointment,
        timeAppointment: dto.timeAppointment,
        patient: Number(dto.patient),
        doctor: Number(dto.doctor),
      },
      where: {
        idAppointment: Number(id),
      },
    });
  }

  async updateAppointmentStateToValid(id: number): Promise<Appointment> {
    return await this.prisma.appointment.update({
      data: {
        isValid: true,
      },
      where: {
        idAppointment: Number(id),
      },
    });
  }

  async deleteAppointmentById(id: number): Promise<Appointment> {
    return await this.prisma.appointment.delete({
      where: {
        idAppointment: Number(id),
      },
    });
  }
}
