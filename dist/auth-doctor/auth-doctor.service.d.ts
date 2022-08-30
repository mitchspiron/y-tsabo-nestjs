import { PrismaService } from '../prisma/prisma.service';
import { AuthDoctorDtoSignin, AuthDoctorDtoSignup } from './dto';
import { Tokens, DoctorTokens } from './types';
import { JwtService } from '@nestjs/jwt';
export declare class AuthDoctorService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    signupLocal(dto: AuthDoctorDtoSignup): Promise<DoctorTokens>;
    signinLocal(dto: AuthDoctorDtoSignin): Promise<Tokens>;
    logout(idDoctor: number): Promise<void>;
    refreshTokens(idDoctor: number, rt: string): Promise<Tokens>;
    updateRtHash(idDoctor: number, rt: string): Promise<void>;
    hashData(data: string): Promise<string>;
    getTokens(idDoctor: number, emailDoctor: string): Promise<Tokens>;
}
