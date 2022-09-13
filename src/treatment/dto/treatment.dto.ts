import { IsNotEmpty } from 'class-validator';

export class TreatmentDto {
  @IsNotEmpty()
  patient: number;

  @IsNotEmpty()
  doctor: number;

  @IsNotEmpty()
  disease: number;

  @IsNotEmpty()
  appointment: number;
}
