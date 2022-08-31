import { PrismaService } from '../prisma/prisma.service';
import { PatientDto, PatientPasswordDto } from './dto';
import { Patient, PatientPassword } from './types';
export declare class PatientService {
    private prisma;
    constructor(prisma: PrismaService);
    getPatientById(id: number): Promise<Patient | null>;
    getPatients(): Promise<import(".prisma/client").patient[]>;
    updatePatientById(id: number, dto: PatientDto): Promise<Patient>;
    hashData(data: string): Promise<string>;
    getPasswordPatientById(id: number): Promise<PatientPassword | null>;
    updatePatientPassword(id: number, dto: PatientPasswordDto): Promise<PatientPassword>;
    deletePatientById(id: number): Promise<Patient>;
}
