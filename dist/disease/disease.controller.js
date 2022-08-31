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
exports.DiseaseController = void 0;
const common_1 = require("@nestjs/common");
const disease_service_1 = require("./disease.service");
const dto_1 = require("./dto");
let DiseaseController = class DiseaseController {
    constructor(diseaseService) {
        this.diseaseService = diseaseService;
    }
    async getDiseases() {
        return await this.diseaseService.getDiseases();
    }
    async getDiseaseById(id) {
        return await this.diseaseService.getDiseaseById(id);
    }
    async createDisease(dto) {
        return await this.diseaseService.createDisease(dto);
    }
    async updateDiseaseById(id, dto) {
        return await this.diseaseService.updateDiseaseById(id, dto);
    }
    async deleteDiseaseById(id) {
        return await this.diseaseService.deleteDiseaseById(id);
    }
};
__decorate([
    (0, common_1.Get)('disease'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DiseaseController.prototype, "getDiseases", null);
__decorate([
    (0, common_1.Get)('disease/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DiseaseController.prototype, "getDiseaseById", null);
__decorate([
    (0, common_1.Post)('disease'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.DiseaseDto]),
    __metadata("design:returntype", Promise)
], DiseaseController.prototype, "createDisease", null);
__decorate([
    (0, common_1.Put)('disease/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, dto_1.DiseaseDto]),
    __metadata("design:returntype", Promise)
], DiseaseController.prototype, "updateDiseaseById", null);
__decorate([
    (0, common_1.Delete)('disease/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DiseaseController.prototype, "deleteDiseaseById", null);
DiseaseController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [disease_service_1.DiseaseService])
], DiseaseController);
exports.DiseaseController = DiseaseController;
//# sourceMappingURL=disease.controller.js.map