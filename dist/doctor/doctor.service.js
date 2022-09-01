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
exports.DoctorService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = require("bcrypt");
let DoctorService = class DoctorService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getDoctorById(id) {
        return await this.prisma.doctor.findUnique({
            where: {
                idDoctor: Number(id),
            },
        });
    }
    async getDoctors() {
        return await this.prisma.doctor.findMany();
    }
    async updateDoctorById(id, dto) {
        return await this.prisma.doctor.update({
            data: {
                matriculeDoctor: dto.matriculeDoctor,
                lastnameDoctor: dto.lastnameDoctor,
                firstnameDoctor: dto.firstnameDoctor,
                emailDoctor: dto.emailDoctor,
                phoneDoctor: dto.phoneDoctor,
                addressDoctor: dto.addressDoctor,
                speciality: Number(dto.speciality),
            },
            where: {
                idDoctor: Number(id),
            },
        });
    }
    hashData(data) {
        return bcrypt.hash(data, 10);
    }
    async getPasswordDoctorById(id) {
        return await this.prisma.doctor.findUnique({
            where: {
                idDoctor: Number(id),
            },
            select: {
                passwordDoctor: true,
            },
        });
    }
    async updateDoctorPassword(id, dto) {
        const hash = await this.hashData(dto.passwordDoctor);
        return await this.prisma.doctor.update({
            data: {
                passwordDoctor: hash,
            },
            where: {
                idDoctor: Number(id),
            },
        });
    }
    async deleteDoctorById(id) {
        return await this.prisma.doctor.delete({
            where: {
                idDoctor: Number(id),
            },
        });
    }
};
DoctorService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DoctorService);
exports.DoctorService = DoctorService;
//# sourceMappingURL=doctor.service.js.map