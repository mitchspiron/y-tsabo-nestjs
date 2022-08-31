import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class PatientDto {
  @IsNotEmpty()
  @IsString()
  lastnamePatient: string;

  @IsNotEmpty()
  @IsString()
  firstnamePatient: string;

  @IsNotEmpty()
  @IsEmail()
  emailPatient: string;

  @IsNotEmpty()
  @IsString()
  phonePatient: string;

  @IsNotEmpty()
  @IsString()
  addressPatient: string;
}

export class PatientPasswordDto {
  @IsNotEmpty()
  @IsString()
  passwordPatient: string;
}
