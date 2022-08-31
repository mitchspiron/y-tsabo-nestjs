"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthPatientModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const auth_patient_controller_1 = require("./auth-patient.controller");
const auth_patient_service_1 = require("./auth-patient.service");
const strategies_1 = require("./strategies");
let AuthPatientModule = class AuthPatientModule {
};
AuthPatientModule = __decorate([
    (0, common_1.Module)({
        imports: [jwt_1.JwtModule.register({})],
        controllers: [auth_patient_controller_1.AuthPatientController],
        providers: [auth_patient_service_1.AuthPatientService, strategies_1.AtStrategy, strategies_1.RtStrategy],
    })
], AuthPatientModule);
exports.AuthPatientModule = AuthPatientModule;
//# sourceMappingURL=auth-patient.module.js.map