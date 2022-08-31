import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthPatientController } from './auth-doctor.controller';
import { AuthPatientService } from './auth-doctor.service';
import { AtStrategy, RtStrategy } from './strategies';

@Module({
  imports: [JwtModule.register({})],
  controllers: [AuthPatientController],
  providers: [AuthPatientService, AtStrategy, RtStrategy],
})
export class AuthPatientModule {}
