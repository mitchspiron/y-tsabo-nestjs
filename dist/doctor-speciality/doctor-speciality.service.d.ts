import { PrismaService } from '../prisma/prisma.service';
import { DoctorSpecialityDto } from './dto';
import { DoctorSpeciality } from './types';
export declare class DoctorSpecialityService {
    private prisma;
    constructor(prisma: PrismaService);
    getDoctorSpecialityById(id: number): Promise<DoctorSpeciality | null>;
    getDoctorSpecialities(): Promise<import(".prisma/client").doctorspeciality[]>;
    createDoctorSpeciality(dto: DoctorSpecialityDto): Promise<DoctorSpeciality>;
    updateDoctorSpecialityById(id: number, dto: DoctorSpecialityDto): Promise<DoctorSpeciality>;
    deleteDoctorSpecialityById(id: number): Promise<DoctorSpeciality>;
}
