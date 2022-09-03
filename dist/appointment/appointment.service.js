"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let AppointmentService = class AppointmentService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createAppointment(dto) {
        return await this.prisma.appointment.create({
            data: {
                dateAppointment: dto.dateAppointment,
                timeAppointment: dto.timeAppointment,
                patient: Number(dto.patient),
                doctor: Number(dto.doctor),
                isValid: false,
            },
        });
    }
    async getAppointmentPatientById(id) {
        const patientAppointment = await this.prisma.appointment.findMany({
            select: {
                idAppointment: true,
                dateAppointment: true,
                timeAppointment: true,
                isValid: true,
                doctor_appointmentTodoctor: {
                    select: {
                        idDoctor: true,
                        lastnameDoctor: true,
                        firstnameDoctor: true,
                        emailDoctor: true,
                        phoneDoctor: true,
                    },
                },
            },
            where: {
                patient: Number(id),
            },
        });
        if (!patientAppointment)
            throw new common_1.ForbiddenException('There is no appointment');
        return patientAppointment;
    }
    async getAppointmentByDoctorId(id) {
        const doctorAppointment = await this.prisma.appointment.findMany({
            select: {
                idAppointment: true,
                dateAppointment: true,
                timeAppointment: true,
                isValid: true,
                patient_appointmentTopatient: {
                    select: {
                        idPatient: true,
                        lastnamePatient: true,
                        firstnamePatient: true,
                        emailPatient: true,
                        phonePatient: true,
                    },
                },
            },
            where: {
                doctor: Number(id),
            },
        });
        if (!doctorAppointment)
            throw new common_1.ForbiddenException('There is no appointment');
        return doctorAppointment;
    }
    async updateAppointmentById(id, dto) {
        return await this.prisma.appointment.update({
            data: {
                dateAppointment: dto.dateAppointment,
                timeAppointment: dto.timeAppointment,
                patient: Number(dto.patient),
                doctor: Number(dto.doctor),
            },
            where: {
                idAppointment: Number(id),
            },
        });
    }
    async updateAppointmentStateToValid(id) {
        return await this.prisma.appointment.update({
            data: {
                isValid: true,
            },
            where: {
                idAppointment: Number(id),
            },
        });
    }
    async deleteAppointmentById(id) {
        return await this.prisma.appointment.delete({
            where: {
                idAppointment: Number(id),
            },
        });
    }
};
AppointmentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AppointmentService);
exports.AppointmentService = AppointmentService;
//# sourceMappingURL=appointment.service.js.map