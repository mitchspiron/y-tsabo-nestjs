import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class DoctorDto {
  @IsNotEmpty()
  @IsString()
  lastnameDoctor: string;

  @IsNotEmpty()
  @IsString()
  firstnameDoctor: string;

  @IsNotEmpty()
  @IsEmail()
  emailDoctor: string;

  @IsNotEmpty()
  @IsString()
  phoneDoctor: string;

  @IsNotEmpty()
  @IsString()
  addressDoctor: string;

  @IsNotEmpty()
  speciality: number;
}

export class DoctorPasswordDto {
  @IsNotEmpty()
  @IsString()
  passwordDoctor: string;
}
