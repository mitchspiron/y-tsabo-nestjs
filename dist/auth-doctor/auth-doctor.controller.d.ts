import { AuthDoctorService } from './auth-doctor.service';
import { AuthDoctorDtoSignin, AuthDoctorDtoSignup } from './dto';
import { Tokens, DoctorTokens } from './types';
export declare class AuthDoctorController {
    private authService;
    constructor(authService: AuthDoctorService);
    signupLocal(dto: AuthDoctorDtoSignup): Promise<DoctorTokens>;
    signinLocal(dto: AuthDoctorDtoSignin): Promise<DoctorTokens>;
    logout(idDoctor: number): Promise<void>;
    refreshTokens(idDoctor: number, refreshToken: string): Promise<Tokens>;
}
