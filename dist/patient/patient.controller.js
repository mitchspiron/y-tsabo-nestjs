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
exports.PatientController = void 0;
const common_1 = require("@nestjs/common");
const patient_service_1 = require("./patient.service");
const dto_1 = require("./dto");
let PatientController = class PatientController {
    constructor(patientService) {
        this.patientService = patientService;
    }
    async getPatients() {
        return await this.patientService.getPatients();
    }
    async getPasswordPatientById(id) {
        return await this.patientService.getPasswordPatientById(id);
    }
    async getPatientById(id) {
        return await this.patientService.getPatientById(id);
    }
    async updatePatientById(id, dto) {
        return this.patientService.updatePatientById(id, dto);
    }
    async updatePatientPassword(id, dto) {
        return this.patientService.updatePatientPassword(id, dto);
    }
    async deletePatientById(id) {
        return this.patientService.deletePatientById(id);
    }
};
__decorate([
    (0, common_1.Get)('patient'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PatientController.prototype, "getPatients", null);
__decorate([
    (0, common_1.Get)('patient/password/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PatientController.prototype, "getPasswordPatientById", null);
__decorate([
    (0, common_1.Get)('patient/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PatientController.prototype, "getPatientById", null);
__decorate([
    (0, common_1.Put)('patient/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, dto_1.PatientDto]),
    __metadata("design:returntype", Promise)
], PatientController.prototype, "updatePatientById", null);
__decorate([
    (0, common_1.Put)('patient/password/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, dto_1.PatientPasswordDto]),
    __metadata("design:returntype", Promise)
], PatientController.prototype, "updatePatientPassword", null);
__decorate([
    (0, common_1.Delete)('patient/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PatientController.prototype, "deletePatientById", null);
PatientController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [patient_service_1.PatientService])
], PatientController);
exports.PatientController = PatientController;
//# sourceMappingURL=patient.controller.js.map