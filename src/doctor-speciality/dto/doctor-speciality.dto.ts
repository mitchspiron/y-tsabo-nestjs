import { IsNotEmpty, IsString } from 'class-validator';

export class DoctorSpecialityDto {
  @IsNotEmpty()
  @IsString()
  nameSpeciality: string;
}
