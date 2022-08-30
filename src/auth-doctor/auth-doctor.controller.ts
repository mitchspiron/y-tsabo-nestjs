import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  GetCurrentDoctor,
  GetCurrentDoctorId,
  Public,
} from '../common/decorators';
import { RtGuard } from '../common/guards';
import { AuthDoctorService } from './auth-doctor.service';
import { AuthDoctorDtoSignin, AuthDoctorDtoSignup } from './dto';
import { Tokens, DoctorTokens } from './types';

@Controller('auth-doctor')
export class AuthDoctorController {
  constructor(private authService: AuthDoctorService) {}

  @Public()
  @Post('local/signup')
  @HttpCode(HttpStatus.CREATED)
  signupLocal(@Body() dto: AuthDoctorDtoSignup): Promise<DoctorTokens> {
    return this.authService.signupLocal(dto);
  }

  @Public()
  @Post('local/signin')
  @HttpCode(HttpStatus.OK)
  signinLocal(@Body() dto: AuthDoctorDtoSignin): Promise<Tokens> {
    return this.authService.signinLocal(dto);
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  logout(@GetCurrentDoctorId() idDoctor: number) {
    console.log(idDoctor);
    return this.authService.logout(idDoctor);
  }

  @Public()
  @UseGuards(RtGuard)
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  refreshTokens(
    @GetCurrentDoctorId() idDoctor: number,
    @GetCurrentDoctor('refreshToken') refreshToken: string,
  ) {
    return this.authService.refreshTokens(idDoctor, refreshToken);
  }
}
