import { PrismaService } from '../prisma/prisma.service';
import { DoctorDto, DoctorPasswordDto } from './dto';
import { Doctor, DoctorPassword } from './types';
export declare class DoctorService {
    private prisma;
    constructor(prisma: PrismaService);
    getDoctorById(id: number): Promise<Doctor | null>;
    getDoctors(): Promise<{
        idDoctor: number;
        firstnameDoctor: string;
        lastnameDoctor: string;
        doctorspeciality: {
            nameSpeciality: string;
            idSpeciality: number;
        };
        matriculeDoctor: string;
        emailDoctor: string;
        phoneDoctor: string;
        addressDoctor: string;
    }[]>;
    getIdDoctors(): Promise<({
        idDoctor: number;
    }[] | {
        lastnameDoctor: string;
    }[] | {
        firstnameDoctor: string;
    }[])[]>;
    updateDoctorById(id: number, dto: DoctorDto): Promise<Doctor>;
    hashData(data: string): Promise<string>;
    getPasswordDoctorById(id: number): Promise<DoctorPassword | null>;
    updateDoctorPassword(id: number, dto: DoctorPasswordDto): Promise<DoctorPassword>;
    deleteDoctorById(id: number): Promise<Doctor>;
}
