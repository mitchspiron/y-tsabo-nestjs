import { PatientService } from './doctor.service';
import { PatientDto, PatientPasswordDto } from './dto';
import { Patient, PatientPassword } from './types';
export declare class PatientController {
    private readonly patientService;
    constructor(patientService: PatientService);
    getPatients(): Promise<import(".prisma/client").patient[]>;
    getPatientById(id: number): Promise<Patient>;
    updatePatientById(id: number, dto: PatientDto): Promise<Patient>;
    updatePatientPassword(id: number, dto: PatientPasswordDto): Promise<PatientPassword>;
    deletePatientById(id: number): Promise<Patient>;
}
