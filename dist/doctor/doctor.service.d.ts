import { PrismaService } from '../prisma/prisma.service';
import { DoctorDto, DoctorPasswordDto } from './dto';
import { Doctor, DoctorPassword } from './types';
export declare class DoctorService {
    private prisma;
    constructor(prisma: PrismaService);
    getDoctorById(id: number): Promise<Doctor | null>;
    getDoctors(): Promise<import(".prisma/client").doctor[]>;
    updateDoctorById(id: number, dto: DoctorDto): Promise<Doctor>;
    hashData(data: string): Promise<string>;
    getPasswordDoctorById(id: number): Promise<DoctorPassword | null>;
    updateDoctorPassword(id: number, dto: DoctorPasswordDto): Promise<DoctorPassword>;
    deleteDoctorById(id: number): Promise<Doctor>;
}
