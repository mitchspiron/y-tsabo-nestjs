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

  @IsNotEmpty()
  @IsString()
  sexePatient: string;

  @IsNotEmpty()
  agePatient: number;
}

export class PatientPasswordDto {
  @IsNotEmpty()
  @IsString()
  passwordPatient: string;
}
