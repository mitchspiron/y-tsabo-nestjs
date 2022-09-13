import { PrismaService } from '../prisma/prisma.service';
import { TreatmentDto } from './dto';
import { Treatment, TreatmentUpdate } from './types';
export declare class TreatmentService {
    private prisma;
    constructor(prisma: PrismaService);
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
    changeTimeZone(date: any, timeZone: any): Date;
    createTreatment(dto: TreatmentDto): Promise<Treatment>;
    updateTreatmentById(id: number, dto: TreatmentDto): Promise<TreatmentUpdate>;
    updateTreatmentStateToTreated(id: number): Promise<Treatment>;
    deleteTreatmentById(id: number): Promise<Treatment>;
}
