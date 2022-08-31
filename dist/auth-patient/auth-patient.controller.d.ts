import { AuthPatientService } from './auth-patient.service';
import { AuthPatientDtoSignin, AuthPatientDtoSignup } from './dto';
import { PatientTokens, Tokens } from './types';
export declare class AuthPatientController {
    private authService;
    constructor(authService: AuthPatientService);
    signupLocal(dto: AuthPatientDtoSignup): Promise<PatientTokens>;
    signinLocal(dto: AuthPatientDtoSignin): Promise<Tokens>;
    logout(idPatient: number): Promise<void>;
    refreshTokens(idPatient: number, refreshToken: string): Promise<Tokens>;
}
