import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthDoctorController } from './auth-doctor.controller';
import { AuthDoctorService } from './auth-doctor.service';
import { AtStrategy, RtStrategy } from './strategies';

@Module({
  imports: [JwtModule.register({})],
  controllers: [AuthDoctorController],
  providers: [AuthDoctorService, AtStrategy, RtStrategy],
})
export class AuthDoctorModule {}
