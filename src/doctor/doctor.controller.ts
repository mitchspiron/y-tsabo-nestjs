import { Body, Controller, Delete, Get, Param, Put } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { DoctorDto, DoctorPasswordDto } from './dto';
import { Doctor, DoctorPassword } from './types';

@Controller()
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

  @Get('doctor')
  async getDoctors() {
    return await this.doctorService.getDoctors();
  }

  @Get('doctor/id')
  async getIdDoctors() {
    return await this.doctorService.getIdDoctors();
  }

  @Get('patient/password/:id')
  async getPasswordDoctorById(
    @Param('id') id: number,
  ): Promise<DoctorPassword> {
    return await this.doctorService.getPasswordDoctorById(id);
  }

  @Get('doctor/:id')
  async getDoctorById(@Param('id') id: number): Promise<Doctor> {
    return await this.doctorService.getDoctorById(id);
  }

  @Put('doctor/:id')
  async updateDoctorById(
    @Param('id') id: number,
    @Body() dto: DoctorDto,
  ): Promise<Doctor> {
    return this.doctorService.updateDoctorById(id, dto);
  }

  @Put('doctor/password/:id')
  async updateDoctorPassword(
    @Param('id') id: number,
    @Body() dto: DoctorPasswordDto,
  ): Promise<DoctorPassword> {
    return this.doctorService.updateDoctorPassword(id, dto);
  }

  @Delete('doctor/:id')
  async deleteDoctorById(@Param('id') id: number): Promise<Doctor> {
    return this.doctorService.deleteDoctorById(id);
  }
}
