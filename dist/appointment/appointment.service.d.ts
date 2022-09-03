import { PrismaService } from '../prisma/prisma.service';
import { AppointmentDto } from './dto';
import { Appointment } from './types';
export declare class AppointmentService {
    private prisma;
    constructor(prisma: PrismaService);
    createAppointment(dto: AppointmentDto): Promise<Appointment>;
    getAppointmentPatientById(id: number): Promise<{
        doctor_appointmentTodoctor: {
            idDoctor: number;
            lastnameDoctor: string;
            firstnameDoctor: string;
            emailDoctor: string;
            phoneDoctor: string;
        };
        dateAppointment: string;
        timeAppointment: string;
        isValid: boolean;
        idAppointment: number;
    }[]>;
    getAppointmentByDoctorId(id: number): Promise<{
        dateAppointment: string;
        timeAppointment: string;
        isValid: boolean;
        patient_appointmentTopatient: {
            idPatient: number;
            lastnamePatient: string;
            firstnamePatient: string;
            emailPatient: string;
            phonePatient: string;
        };
        idAppointment: number;
    }[]>;
    updateAppointmentById(id: number, dto: AppointmentDto): Promise<Appointment>;
    updateAppointmentStateToValid(id: number): Promise<Appointment>;
    deleteAppointmentById(id: number): Promise<Appointment>;
}
