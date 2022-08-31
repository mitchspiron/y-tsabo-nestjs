import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  GetCurrentPatient,
  GetCurrentPatientId,
  Public,
} from '../common/decorators';
import { RtGuard } from '../common/guards';
import { AuthPatientService } from './auth-patient.service';
import { AuthPatientDtoSignin, AuthPatientDtoSignup } from './dto';
import { PatientTokens, Tokens } from './types';

@Controller('auth-patient')
export class AuthPatientController {
  constructor(private authService: AuthPatientService) {}

  @Public()
  @Post('local/signup')
  @HttpCode(HttpStatus.CREATED)
  signupLocal(@Body() dto: AuthPatientDtoSignup): Promise<PatientTokens> {
    return this.authService.signupLocal(dto);
  }

  @Public()
  @Post('local/signin')
  @HttpCode(HttpStatus.OK)
  signinLocal(@Body() dto: AuthPatientDtoSignin): Promise<Tokens> {
    return this.authService.signinLocal(dto);
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  logout(@GetCurrentPatientId() idPatient: number) {
    console.log(idPatient);
    return this.authService.logout(idPatient);
  }

  @Public()
  @UseGuards(RtGuard)
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  refreshTokens(
    @GetCurrentPatientId() idPatient: number,
    @GetCurrentPatient('refreshToken') refreshToken: string,
  ) {
    return this.authService.refreshTokens(idPatient, refreshToken);
  }
}
