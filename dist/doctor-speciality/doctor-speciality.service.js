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
exports.DoctorSpecialityService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let DoctorSpecialityService = class DoctorSpecialityService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getDoctorSpecialityById(id) {
        return await this.prisma.doctorspeciality.findUnique({
            where: {
                idSpeciality: Number(id),
            },
        });
    }
    async getDoctorSpecialities() {
        return await this.prisma.doctorspeciality.findMany();
    }
    async createDoctorSpeciality(dto) {
        return await this.prisma.doctorspeciality.create({
            data: {
                nameSpeciality: dto.nameSpeciality,
            },
        });
    }
    async updateDoctorSpecialityById(id, dto) {
        return await this.prisma.doctorspeciality.update({
            data: {
                nameSpeciality: dto.nameSpeciality,
            },
            where: {
                idSpeciality: Number(id),
            },
        });
    }
    async deleteDoctorSpecialityById(id) {
        return await this.prisma.doctorspeciality.delete({
            where: {
                idSpeciality: Number(id),
            },
        });
    }
};
DoctorSpecialityService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DoctorSpecialityService);
exports.DoctorSpecialityService = DoctorSpecialityService;
//# sourceMappingURL=doctor-speciality.service.js.map