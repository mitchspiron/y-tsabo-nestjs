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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorSpecialityController = void 0;
const common_1 = require("@nestjs/common");
const doctor_speciality_service_1 = require("./doctor-speciality.service");
const dto_1 = require("./dto");
let DoctorSpecialityController = class DoctorSpecialityController {
    constructor(doctorSpecialityService) {
        this.doctorSpecialityService = doctorSpecialityService;
    }
    async getDoctorSpecialities() {
        return await this.doctorSpecialityService.getDoctorSpecialities();
    }
    async getDoctorSpecialityById(id) {
        return await this.doctorSpecialityService.getDoctorSpecialityById(id);
    }
    async createDoctorSpeciality(dto) {
        return await this.doctorSpecialityService.createDoctorSpeciality(dto);
    }
    async updateDoctorSpecialityById(id, dto) {
        return await this.doctorSpecialityService.updateDoctorSpecialityById(id, dto);
    }
    async deleteDoctorSpecialityById(id) {
        return await this.doctorSpecialityService.deleteDoctorSpecialityById(id);
    }
};
__decorate([
    (0, common_1.Get)('doctor-speciality'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DoctorSpecialityController.prototype, "getDoctorSpecialities", null);
__decorate([
    (0, common_1.Get)('doctor-speciality/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DoctorSpecialityController.prototype, "getDoctorSpecialityById", null);
__decorate([
    (0, common_1.Post)('doctor-speciality'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.DoctorSpecialityDto]),
    __metadata("design:returntype", Promise)
], DoctorSpecialityController.prototype, "createDoctorSpeciality", null);
__decorate([
    (0, common_1.Put)('doctor-speciality/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, dto_1.DoctorSpecialityDto]),
    __metadata("design:returntype", Promise)
], DoctorSpecialityController.prototype, "updateDoctorSpecialityById", null);
__decorate([
    (0, common_1.Delete)('doctor-speciality/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DoctorSpecialityController.prototype, "deleteDoctorSpecialityById", null);
DoctorSpecialityController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [doctor_speciality_service_1.DoctorSpecialityService])
], DoctorSpecialityController);
exports.DoctorSpecialityController = DoctorSpecialityController;
//# sourceMappingURL=doctor-speciality.controller.js.map