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
exports.AppointmentController = void 0;
const common_1 = require("@nestjs/common");
const appointment_service_1 = require("./appointment.service");
const dto_1 = require("./dto");
let AppointmentController = class AppointmentController {
    constructor(appointmentService) {
        this.appointmentService = appointmentService;
    }
    async createAppointment(dto) {
        return await this.appointmentService.createAppointment(dto);
    }
    async getAppointmentPatientById(id) {
        return await this.appointmentService.getAppointmentPatientById(id);
    }
    async getAppointmentByDoctorId(id) {
        return await this.appointmentService.getAppointmentByDoctorId(id);
    }
    async updateAppointmentById(id, dto) {
        return this.appointmentService.updateAppointmentById(id, dto);
    }
    async updateAppointmentStateToValid(id) {
        return this.appointmentService.updateAppointmentStateToValid(id);
    }
    async deleteAppointmentById(id) {
        return this.appointmentService.deleteAppointmentById(id);
    }
};
__decorate([
    (0, common_1.Post)('appointment'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.AppointmentDto]),
    __metadata("design:returntype", Promise)
], AppointmentController.prototype, "createAppointment", null);
__decorate([
    (0, common_1.Get)('appointment/patient/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AppointmentController.prototype, "getAppointmentPatientById", null);
__decorate([
    (0, common_1.Get)('appointment/doctor/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AppointmentController.prototype, "getAppointmentByDoctorId", null);
__decorate([
    (0, common_1.Put)('appointment/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, dto_1.AppointmentDto]),
    __metadata("design:returntype", Promise)
], AppointmentController.prototype, "updateAppointmentById", null);
__decorate([
    (0, common_1.Put)('appointment/valid/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AppointmentController.prototype, "updateAppointmentStateToValid", null);
__decorate([
    (0, common_1.Delete)('appointment/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AppointmentController.prototype, "deleteAppointmentById", null);
AppointmentController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [appointment_service_1.AppointmentService])
], AppointmentController);
exports.AppointmentController = AppointmentController;
//# sourceMappingURL=appointment.controller.js.map