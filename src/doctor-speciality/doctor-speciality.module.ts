import { Module } from '@nestjs/common';
import { DoctorSpecialityController } from './doctor-speciality.controller';
import { DoctorSpecialityService } from './doctor-speciality.service';

@Module({
  imports: [],
  controllers: [DoctorSpecialityController],
  providers: [DoctorSpecialityService],
})
export class DoctorSpecialityModule {}
