import { DoctorSpecialityService } from './doctor-speciality.service';
import { DoctorSpecialityDto } from './dto';
import { DoctorSpeciality } from './types';
export declare class DoctorSpecialityController {
    private readonly doctorSpecialityService;
    constructor(doctorSpecialityService: DoctorSpecialityService);
    getDoctorSpecialities(): Promise<import(".prisma/client").doctorspeciality[]>;
    getDoctorSpecialityById(id: number): Promise<DoctorSpeciality>;
    createDoctorSpeciality(dto: DoctorSpecialityDto): Promise<DoctorSpeciality>;
    updateDoctorSpecialityById(id: number, dto: DoctorSpecialityDto): Promise<DoctorSpeciality>;
    deleteDoctorSpecialityById(id: number): Promise<DoctorSpeciality>;
}
