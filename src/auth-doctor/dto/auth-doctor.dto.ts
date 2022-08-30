import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthDoctorDtoSignup {
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

  @IsNotEmpty()
  @IsString()
  passwordDoctor: string;
}

export class AuthDoctorDtoSignin {
  @IsNotEmpty()
  @IsEmail()
  emailDoctor: string;

  @IsNotEmpty()
  @IsString()
  passwordDoctor: string;
}
