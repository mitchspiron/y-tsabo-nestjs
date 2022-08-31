import { IsNotEmpty, IsString } from 'class-validator';

export class DiseaseDto {
  @IsNotEmpty()
  @IsString()
  nameDisease: string;

  @IsNotEmpty()
  @IsString()
  detailsDisease: string;
}
