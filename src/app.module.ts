import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AppointmentModule } from './appointment/appointment.module';
import { AuthDoctorModule } from './auth-doctor/auth-doctor.module';
import { AuthPatientModule } from './auth-patient/auth-patient.module';
import { AtGuard } from './common/guards';
import { DiseaseModule } from './disease/disease.module';
import { DoctorSpecialityModule } from './doctor-speciality/doctor-speciality.module';
import { DoctorModule } from './doctor/doctor.module';
import { PatientModule } from './patient/patient.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    AuthDoctorModule,
    PrismaModule,
    DoctorModule,
    AuthPatientModule,
    PatientModule,
    DiseaseModule,
    DoctorSpecialityModule,
    AppointmentModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AtGuard,
    },
  ],
})
export class AppModule {}
