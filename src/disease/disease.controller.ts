import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DiseaseService } from './disease.service';
import { DiseaseDto } from './dto';
import { Disease } from './types';

@Controller()
export class DiseaseController {
  constructor(private readonly diseaseService: DiseaseService) {}

  @Get('disease')
  async getDiseases() {
    return await this.diseaseService.getDiseases();
  }

  @Get('disease/:id')
  async getDiseaseById(@Param('id') id: number): Promise<Disease> {
    return await this.diseaseService.getDiseaseById(id);
  }

  @Post('disease')
  async createDisease(@Body() dto: DiseaseDto): Promise<Disease> {
    return await this.diseaseService.createDisease(dto);
  }

  @Put('disease/:id')
  async updateDiseaseById(
    @Param('id') id: number,
    @Body() dto: DiseaseDto,
  ): Promise<Disease> {
    return await this.diseaseService.updateDiseaseById(id, dto);
  }

  @Delete('disease/:id')
  async deleteDiseaseById(@Param('id') id: number): Promise<Disease> {
    return await this.diseaseService.deleteDiseaseById(id);
  }
}
