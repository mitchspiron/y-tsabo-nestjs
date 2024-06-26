"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const appointment_module_1 = require("./appointment/appointment.module");
const auth_doctor_module_1 = require("./auth-doctor/auth-doctor.module");
const auth_patient_module_1 = require("./auth-patient/auth-patient.module");
const guards_1 = require("./common/guards");
const disease_module_1 = require("./disease/disease.module");
const doctor_speciality_module_1 = require("./doctor-speciality/doctor-speciality.module");
const doctor_module_1 = require("./doctor/doctor.module");
const patient_module_1 = require("./patient/patient.module");
const prisma_module_1 = require("./prisma/prisma.module");
const treatment_module_1 = require("./treatment/treatment.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            auth_doctor_module_1.AuthDoctorModule,
            prisma_module_1.PrismaModule,
            doctor_module_1.DoctorModule,
            auth_patient_module_1.AuthPatientModule,
            patient_module_1.PatientModule,
            disease_module_1.DiseaseModule,
            doctor_speciality_module_1.DoctorSpecialityModule,
            appointment_module_1.AppointmentModule,
            treatment_module_1.TreatmentModule,
        ],
        providers: [
            {
                provide: core_1.APP_GUARD,
                useClass: guards_1.AtGuard,
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map