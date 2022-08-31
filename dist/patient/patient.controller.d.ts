import { PatientService } from './patient.service';
import { PatientDto, PatientPasswordDto } from './dto';
import { Patient, PatientPassword } from './types';
export declare class PatientController {
    private readonly patientService;
    constructor(patientService: PatientService);
    getPatients(): Promise<import(".prisma/client").patient[]>;
    getPasswordPatientById(id: number): Promise<PatientPassword>;
    getPatientById(id: number): Promise<Patient>;
    updatePatientById(id: number, dto: PatientDto): Promise<Patient>;
    updatePatientPassword(id: number, dto: PatientPasswordDto): Promise<PatientPassword>;
    deletePatientById(id: number): Promise<Patient>;
}
