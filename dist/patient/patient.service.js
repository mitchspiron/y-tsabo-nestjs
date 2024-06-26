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
exports.PatientService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = require("bcrypt");
let PatientService = class PatientService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getPatientById(id) {
        return await this.prisma.patient.findUnique({
            where: {
                idPatient: Number(id),
            },
        });
    }
    async getPatients() {
        return await this.prisma.patient.findMany();
    }
    async updatePatientById(id, dto) {
        return await this.prisma.patient.update({
            data: {
                lastnamePatient: dto.lastnamePatient,
                firstnamePatient: dto.firstnamePatient,
                emailPatient: dto.emailPatient,
                phonePatient: dto.phonePatient,
                addressPatient: dto.addressPatient,
                sexePatient: dto.sexePatient,
                agePatient: Number(dto.agePatient),
            },
            where: {
                idPatient: Number(id),
            },
        });
    }
    hashData(data) {
        return bcrypt.hash(data, 10);
    }
    async getPasswordPatientById(id) {
        return await this.prisma.patient.findUnique({
            where: {
                idPatient: Number(id),
            },
            select: {
                passwordPatient: true,
            },
        });
    }
    async updatePatientPassword(id, dto) {
        const hash = await this.hashData(dto.passwordPatient);
        return await this.prisma.patient.update({
            data: {
                passwordPatient: hash,
            },
            where: {
                idPatient: Number(id),
            },
        });
    }
    async deletePatientById(id) {
        return await this.prisma.patient.delete({
            where: {
                idPatient: Number(id),
            },
        });
    }
};
PatientService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PatientService);
exports.PatientService = PatientService;
//# sourceMappingURL=patient.service.js.map