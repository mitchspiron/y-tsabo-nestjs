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
exports.TreatmentService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const moment = require("moment");
let TreatmentService = class TreatmentService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getTreatmentPatientById(id) {
        return await this.prisma.treatment.findMany({
            where: {
                patient: Number(id),
            },
            select: {
                dateTreatment: true,
                doctor_doctorTotreatment: {
                    select: {
                        idDoctor: true,
                        firstnameDoctor: true,
                        lastnameDoctor: true,
                    },
                },
                disease_diseaseTotreatment: {
                    select: {
                        idDisease: true,
                        nameDisease: true,
                    },
                },
                appointment: true,
                isTreated: true,
            },
        });
    }
    async getTreatmentDoctorById(id) {
        return await this.prisma.treatment.findMany({
            where: {
                doctor: Number(id),
            },
            select: {
                dateTreatment: true,
                patient_patientTotreatment: {
                    select: {
                        idPatient: true,
                        firstnamePatient: true,
                        lastnamePatient: true,
                    },
                },
                disease_diseaseTotreatment: {
                    select: {
                        idDisease: true,
                        nameDisease: true,
                    },
                },
                appointment: true,
                isTreated: true,
            },
        });
    }
    changeTimeZone(date, timeZone) {
        if (typeof date === 'string') {
            return new Date(new Date(date).toLocaleString('en-US', {
                timeZone,
            }));
        }
        return new Date(date.toLocaleString('en-US', {
            timeZone,
        }));
    }
    async createTreatment(dto) {
        const date = moment().format('DD-MM-YYYY HH:mm:ss');
        return await this.prisma.treatment.create({
            data: {
                dateTreatment: date,
                patient: Number(dto.patient),
                doctor: Number(dto.doctor),
                disease: Number(dto.disease),
                appointment: Number(dto.appointment),
                isTreated: false,
            },
        });
    }
    async updateTreatmentById(id, dto) {
        return await this.prisma.treatment.update({
            data: {
                patient: Number(dto.patient),
                doctor: Number(dto.doctor),
                disease: Number(dto.disease),
                appointment: Number(dto.appointment),
            },
            where: {
                idTreatment: Number(id),
            },
        });
    }
    async updateTreatmentStateToTreated(id) {
        return await this.prisma.treatment.update({
            data: {
                isTreated: true,
            },
            where: {
                idTreatment: Number(id),
            },
        });
    }
    async deleteTreatmentById(id) {
        return await this.prisma.treatment.delete({
            where: {
                idTreatment: Number(id),
            },
        });
    }
};
TreatmentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TreatmentService);
exports.TreatmentService = TreatmentService;
//# sourceMappingURL=treatment.service.js.map