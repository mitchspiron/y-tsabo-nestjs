import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { AuthPatientDtoSignin, AuthPatientDtoSignup } from './dto';
import { PatientTokens, Tokens } from './types';
export declare class AuthPatientService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    signupLocal(dto: AuthPatientDtoSignup): Promise<PatientTokens>;
    signinLocal(dto: AuthPatientDtoSignin): Promise<Tokens>;
    logout(idPatient: number): Promise<void>;
    refreshTokens(idPatient: number, rt: string): Promise<Tokens>;
    updateRtHash(idPatient: number, rt: string): Promise<void>;
    hashData(data: string): Promise<string>;
    getTokens(idPatient: number, emailPatient: string): Promise<Tokens>;
}
