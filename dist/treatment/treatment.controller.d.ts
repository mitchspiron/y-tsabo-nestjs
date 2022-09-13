import { TreatmentDto } from './dto';
import { TreatmentService } from './treatment.service';
import { Treatment, TreatmentUpdate } from './types';
export declare class TreatmentController {
    private readonly treatmentService;
    constructor(treatmentService: TreatmentService);
    createTreatment(dto: TreatmentDto): Promise<Treatment>;
    getTreatmentPatientById(id: number): Promise<{
        dateTreatment: string;
        doctor_doctorTotreatment: {
            idDoctor: number;
            firstnameDoctor: string;
            lastnameDoctor: string;
        };
        disease_diseaseTotreatment: {
            idDisease: number;
            nameDisease: string;
        };
        appointment: number;
        isTreated: boolean;
    }[]>;
    getTreatmentDoctorById(id: number): Promise<{
        dateTreatment: string;
        disease_diseaseTotreatment: {
            idDisease: number;
            nameDisease: string;
        };
        appointment: number;
        isTreated: boolean;
        patient_patientTotreatment: {
            idPatient: number;
            firstnamePatient: string;
            lastnamePatient: string;
        };
    }[]>;
    updateTreatmentById(id: number, dto: TreatmentDto): Promise<TreatmentUpdate>;
    updateTreatmentStateToTreated(id: number): Promise<Treatment>;
    deleteTreatmentById(id: number): Promise<Treatment>;
}
