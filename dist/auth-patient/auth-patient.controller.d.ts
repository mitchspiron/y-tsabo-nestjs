import { AuthPatientService } from './auth-patient.service';
import { AuthPatientDtoSignin, AuthPatientDtoSignup } from './dto';
import { PatientTokens } from './types';
export declare class AuthPatientController {
    private authService;
    constructor(authService: AuthPatientService);
    signupLocal(dto: AuthPatientDtoSignup): Promise<PatientTokens>;
    signinLocal(dto: AuthPatientDtoSignin): Promise<PatientTokens>;
    logout(idPatient: number): Promise<void>;
    refreshTokens(idPatient: number, refreshToken: string): Promise<import("./types").Tokens>;
}
