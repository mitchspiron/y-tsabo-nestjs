import { Module } from '@nestjs/common';
import { TreatmentController } from './treatment.controller';
import { TreatmentService } from './treatment.service';

@Module({
  imports: [],
  controllers: [TreatmentController],
  providers: [TreatmentService],
})
export class TreatmentModule {}
