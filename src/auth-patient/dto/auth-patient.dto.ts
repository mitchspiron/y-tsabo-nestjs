import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthPatientDtoSignup {
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

  @IsNotEmpty()
  @IsString()
  passwordPatient: string;
}

export class AuthPatientDtoSignin {
  @IsNotEmpty()
  @IsEmail()
  emailPatient: string;

  @IsNotEmpty()
  @IsString()
  passwordPatient: string;
}
