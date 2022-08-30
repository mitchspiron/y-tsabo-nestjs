import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AuthDoctorModule } from './auth-doctor/auth-doctor.module';
import { AtGuard } from './common/guards';
import { DoctorModule } from './doctor/doctor.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AuthDoctorModule, PrismaModule, DoctorModule],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AtGuard,
    },
  ],
})
export class AppModule {}
