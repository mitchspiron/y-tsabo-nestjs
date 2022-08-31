import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AuthDoctorModule } from './auth-doctor/auth-doctor.module';
import { AuthPatientModule } from './auth-patient/auth-doctor.module';
import { AtGuard } from './common/guards';
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
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AtGuard,
    },
  ],
})
export class AppModule {}
