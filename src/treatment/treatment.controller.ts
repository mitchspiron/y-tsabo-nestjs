import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TreatmentDto } from './dto';
import { TreatmentService } from './treatment.service';
import { Treatment, TreatmentUpdate } from './types';

@Controller()
export class TreatmentController {
  constructor(private readonly treatmentService: TreatmentService) {}

  @Post('treatment')
  async createTreatment(@Body() dto: TreatmentDto): Promise<Treatment> {
    return await this.treatmentService.createTreatment(dto);
  }

  @Get('treatment/patient/:id')
  async getTreatmentPatientById(@Param('id') id: number) {
    return await this.treatmentService.getTreatmentPatientById(id);
  }

  @Get('treatment/doctor/:id')
  async getTreatmentDoctorById(@Param('id') id: number) {
    return await this.treatmentService.getTreatmentDoctorById(id);
  }

  @Put('treatment/:id')
  async updateTreatmentById(
    @Param('id') id: number,
    @Body() dto: TreatmentDto,
  ): Promise<TreatmentUpdate> {
    return this.treatmentService.updateTreatmentById(id, dto);
  }

  @Put('treatment/valid/:id')
  async updateTreatmentStateToTreated(
    @Param('id') id: number,
  ): Promise<Treatment> {
    return this.treatmentService.updateTreatmentStateToTreated(id);
  }

  @Delete('treatment/:id')
  async deleteTreatmentById(@Param('id') id: number): Promise<Treatment> {
    return this.treatmentService.deleteTreatmentById(id);
  }
}
