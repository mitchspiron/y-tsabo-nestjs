import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DoctorSpecialityService } from './doctor-speciality.service';
import { DoctorSpecialityDto } from './dto';
import { DoctorSpeciality } from './types';

@Controller()
export class DoctorSpecialityController {
  constructor(
    private readonly doctorSpecialityService: DoctorSpecialityService,
  ) {}

  @Get('doctor-speciality')
  async getDoctorSpecialities() {
    return await this.doctorSpecialityService.getDoctorSpecialities();
  }

  @Get('doctor-speciality/:id')
  async getDoctorSpecialityById(
    @Param('id') id: number,
  ): Promise<DoctorSpeciality> {
    return await this.doctorSpecialityService.getDoctorSpecialityById(id);
  }

  @Post('doctor-speciality')
  async createDoctorSpeciality(
    @Body() dto: DoctorSpecialityDto,
  ): Promise<DoctorSpeciality> {
    return await this.doctorSpecialityService.createDoctorSpeciality(dto);
  }

  @Put('doctor-speciality/:id')
  async updateDoctorSpecialityById(
    @Param('id') id: number,
    @Body() dto: DoctorSpecialityDto,
  ): Promise<DoctorSpeciality> {
    return await this.doctorSpecialityService.updateDoctorSpecialityById(
      id,
      dto,
    );
  }

  @Delete('doctor-speciality/:id')
  async deleteDoctorSpecialityById(
    @Param('id') id: number,
  ): Promise<DoctorSpeciality> {
    return await this.doctorSpecialityService.deleteDoctorSpecialityById(id);
  }
}
