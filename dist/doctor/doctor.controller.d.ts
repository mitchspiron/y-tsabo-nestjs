import { DoctorService } from './doctor.service';
import { DoctorDto, DoctorPasswordDto } from './dto';
import { Doctor, DoctorPassword } from './types';
export declare class DoctorController {
    private readonly doctorService;
    constructor(doctorService: DoctorService);
    getDoctors(): Promise<{
        idDoctor: number;
        firstnameDoctor: string;
        lastnameDoctor: string;
        doctorspeciality: {
            idSpeciality: number;
            nameSpeciality: string;
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
    getPasswordDoctorById(id: number): Promise<DoctorPassword>;
    getDoctorById(id: number): Promise<Doctor>;
    updateDoctorById(id: number, dto: DoctorDto): Promise<Doctor>;
    updateDoctorPassword(id: number, dto: DoctorPasswordDto): Promise<DoctorPassword>;
    deleteDoctorById(id: number): Promise<Doctor>;
}
