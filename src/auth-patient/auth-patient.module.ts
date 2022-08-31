import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthPatientController } from './auth-patient.controller';
import { AuthPatientService } from './auth-patient.service';
import { AtStrategy, RtStrategy } from './strategies';

@Module({
  imports: [JwtModule.register({})],
  controllers: [AuthPatientController],
  providers: [AuthPatientService, AtStrategy, RtStrategy],
})
export class AuthPatientModule {}
