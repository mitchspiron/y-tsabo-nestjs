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
exports.AuthPatientController = void 0;
const common_1 = require("@nestjs/common");
const decorators_1 = require("../common/decorators");
const guards_1 = require("../common/guards");
const auth_patient_service_1 = require("./auth-patient.service");
const dto_1 = require("./dto");
let AuthPatientController = class AuthPatientController {
    constructor(authService) {
        this.authService = authService;
    }
    signupLocal(dto) {
        return this.authService.signupLocal(dto);
    }
    signinLocal(dto) {
        return this.authService.signinLocal(dto);
    }
    logout(idPatient) {
        console.log(idPatient);
        return this.authService.logout(idPatient);
    }
    refreshTokens(idPatient, refreshToken) {
        return this.authService.refreshTokens(idPatient, refreshToken);
    }
};
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Post)('local/signup'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.AuthPatientDtoSignup]),
    __metadata("design:returntype", Promise)
], AuthPatientController.prototype, "signupLocal", null);
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Post)('local/signin'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.AuthPatientDtoSignin]),
    __metadata("design:returntype", Promise)
], AuthPatientController.prototype, "signinLocal", null);
__decorate([
    (0, common_1.Post)('logout'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, decorators_1.GetCurrentPatientId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AuthPatientController.prototype, "logout", null);
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.UseGuards)(guards_1.RtGuard),
    (0, common_1.Post)('refresh'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, decorators_1.GetCurrentPatientId)()),
    __param(1, (0, decorators_1.GetCurrentPatient)('refreshToken')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], AuthPatientController.prototype, "refreshTokens", null);
AuthPatientController = __decorate([
    (0, common_1.Controller)('auth-patient'),
    __metadata("design:paramtypes", [auth_patient_service_1.AuthPatientService])
], AuthPatientController);
exports.AuthPatientController = AuthPatientController;
//# sourceMappingURL=auth-patient.controller.js.map