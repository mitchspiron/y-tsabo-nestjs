import { Body, Controller, Delete, Get, Param, Put } from '@nestjs/common';
import { PatientService } from './patient.service';
import { PatientDto, PatientPasswordDto } from './dto';
import { Patient, PatientPassword } from './types';

@Controller()
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Get('patient')
  async getPatients() {
    return await this.patientService.getPatients();
  }

  @Get('patient/password/:id')
  async getPasswordPatientById(
    @Param('id') id: number,
  ): Promise<PatientPassword> {
    return await this.patientService.getPasswordPatientById(id);
  }

  @Get('patient/:id')
  async getPatientById(@Param('id') id: number): Promise<Patient> {
    return await this.patientService.getPatientById(id);
  }

  @Put('patient/:id')
  async updatePatientById(
    @Param('id') id: number,
    @Body() dto: PatientDto,
  ): Promise<Patient> {
    return this.patientService.updatePatientById(id, dto);
  }

  @Put('patient/password/:id')
  async updatePatientPassword(
    @Param('id') id: number,
    @Body() dto: PatientPasswordDto,
  ): Promise<PatientPassword> {
    return this.patientService.updatePatientPassword(id, dto);
  }

  @Delete('patient/:id')
  async deletePatientById(@Param('id') id: number): Promise<Patient> {
    return this.patientService.deletePatientById(id);
  }
}
