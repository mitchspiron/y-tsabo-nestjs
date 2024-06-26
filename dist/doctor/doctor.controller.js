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
exports.DoctorController = void 0;
const common_1 = require("@nestjs/common");
const doctor_service_1 = require("./doctor.service");
const dto_1 = require("./dto");
let DoctorController = class DoctorController {
    constructor(doctorService) {
        this.doctorService = doctorService;
    }
    async getDoctors() {
        return await this.doctorService.getDoctors();
    }
    async getIdDoctors() {
        return await this.doctorService.getIdDoctors();
    }
    async getPasswordDoctorById(id) {
        return await this.doctorService.getPasswordDoctorById(id);
    }
    async getDoctorById(id) {
        return await this.doctorService.getDoctorById(id);
    }
    async updateDoctorById(id, dto) {
        return this.doctorService.updateDoctorById(id, dto);
    }
    async updateDoctorPassword(id, dto) {
        return this.doctorService.updateDoctorPassword(id, dto);
    }
    async deleteDoctorById(id) {
        return this.doctorService.deleteDoctorById(id);
    }
};
__decorate([
    (0, common_1.Get)('doctor'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DoctorController.prototype, "getDoctors", null);
__decorate([
    (0, common_1.Get)('doctor/id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DoctorController.prototype, "getIdDoctors", null);
__decorate([
    (0, common_1.Get)('patient/password/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DoctorController.prototype, "getPasswordDoctorById", null);
__decorate([
    (0, common_1.Get)('doctor/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DoctorController.prototype, "getDoctorById", null);
__decorate([
    (0, common_1.Put)('doctor/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, dto_1.DoctorDto]),
    __metadata("design:returntype", Promise)
], DoctorController.prototype, "updateDoctorById", null);
__decorate([
    (0, common_1.Put)('doctor/password/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, dto_1.DoctorPasswordDto]),
    __metadata("design:returntype", Promise)
], DoctorController.prototype, "updateDoctorPassword", null);
__decorate([
    (0, common_1.Delete)('doctor/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DoctorController.prototype, "deleteDoctorById", null);
DoctorController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [doctor_service_1.DoctorService])
], DoctorController);
exports.DoctorController = DoctorController;
//# sourceMappingURL=doctor.controller.js.map