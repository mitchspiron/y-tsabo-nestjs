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
exports.TreatmentController = void 0;
const common_1 = require("@nestjs/common");
const dto_1 = require("./dto");
const treatment_service_1 = require("./treatment.service");
let TreatmentController = class TreatmentController {
    constructor(treatmentService) {
        this.treatmentService = treatmentService;
    }
    async createTreatment(dto) {
        return await this.treatmentService.createTreatment(dto);
    }
    async getTreatmentPatientById(id) {
        return await this.treatmentService.getTreatmentPatientById(id);
    }
    async getTreatmentDoctorById(id) {
        return await this.treatmentService.getTreatmentDoctorById(id);
    }
    async updateTreatmentById(id, dto) {
        return this.treatmentService.updateTreatmentById(id, dto);
    }
    async updateTreatmentStateToTreated(id) {
        return this.treatmentService.updateTreatmentStateToTreated(id);
    }
    async deleteTreatmentById(id) {
        return this.treatmentService.deleteTreatmentById(id);
    }
};
__decorate([
    (0, common_1.Post)('treatment'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.TreatmentDto]),
    __metadata("design:returntype", Promise)
], TreatmentController.prototype, "createTreatment", null);
__decorate([
    (0, common_1.Get)('treatment/patient/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TreatmentController.prototype, "getTreatmentPatientById", null);
__decorate([
    (0, common_1.Get)('treatment/doctor/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TreatmentController.prototype, "getTreatmentDoctorById", null);
__decorate([
    (0, common_1.Put)('treatment/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, dto_1.TreatmentDto]),
    __metadata("design:returntype", Promise)
], TreatmentController.prototype, "updateTreatmentById", null);
__decorate([
    (0, common_1.Put)('treatment/valid/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TreatmentController.prototype, "updateTreatmentStateToTreated", null);
__decorate([
    (0, common_1.Delete)('treatment/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TreatmentController.prototype, "deleteTreatmentById", null);
TreatmentController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [treatment_service_1.TreatmentService])
], TreatmentController);
exports.TreatmentController = TreatmentController;
//# sourceMappingURL=treatment.controller.js.map