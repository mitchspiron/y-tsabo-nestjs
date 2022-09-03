import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { AppointmentDto } from './dto';
import { Appointment } from './types';

@Controller()
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Post('appointment')
  async createAppointment(@Body() dto: AppointmentDto): Promise<Appointment> {
    return await this.appointmentService.createAppointment(dto);
  }

  @Get('appointment/patient/:id')
  async getAppointmentPatientById(@Param('id') id: number) {
    return await this.appointmentService.getAppointmentPatientById(id);
  }

  @Get('appointment/doctor/:id')
  async getAppointmentByDoctorId(@Param('id') id: number) {
    return await this.appointmentService.getAppointmentByDoctorId(id);
  }

  @Put('appointment/:id')
  async updateAppointmentById(
    @Param('id') id: number,
    @Body() dto: AppointmentDto,
  ): Promise<Appointment> {
    return this.appointmentService.updateAppointmentById(id, dto);
  }

  @Delete('appointment/:id')
  async deleteAppointmentById(@Param('id') id: number): Promise<Appointment> {
    return this.appointmentService.deleteAppointmentById(id);
  }
}
