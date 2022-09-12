import { DoctorService } from './doctor.service';
import { DoctorDto, DoctorPasswordDto } from './dto';
import { Doctor, DoctorPassword } from './types';
export declare class DoctorController {
    private readonly doctorService;
    constructor(doctorService: DoctorService);
    getDoctors(): Promise<{
        doctorspeciality: {
            idSpeciality: number;
            nameSpeciality: string;
        };
        idDoctor: number;
        matriculeDoctor: string;
        lastnameDoctor: string;
        firstnameDoctor: string;
        emailDoctor: string;
        phoneDoctor: string;
        addressDoctor: string;
    }[]>;
    getPasswordDoctorById(id: number): Promise<DoctorPassword>;
    getDoctorById(id: number): Promise<Doctor>;
    updateDoctorById(id: number, dto: DoctorDto): Promise<Doctor>;
    updateDoctorPassword(id: number, dto: DoctorPasswordDto): Promise<DoctorPassword>;
    deleteDoctorById(id: number): Promise<Doctor>;
}
