import { Module } from '@nestjs/common';
import { DiseaseController } from './disease.controller';
import { DiseaseService } from './disease.service';

@Module({
  imports: [],
  controllers: [DiseaseController],
  providers: [DiseaseService],
})
export class DiseaseModule {}
