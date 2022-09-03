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
exports.AuthPatientService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let AuthPatientService = class AuthPatientService {
    constructor(prisma, jwtService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
    }
    async signupLocal(dto) {
        const hash = await this.hashData(dto.passwordPatient);
        const patientEmail = await this.prisma.patient.findUnique({
            where: {
                emailPatient: dto.emailPatient,
            },
        });
        if (patientEmail)
            throw new common_1.ForbiddenException('This email belongs to an existing patient');
        const newPatient = await this.prisma.patient.create({
            data: {
                lastnamePatient: dto.lastnamePatient,
                firstnamePatient: dto.firstnamePatient,
                emailPatient: dto.emailPatient,
                phonePatient: dto.phonePatient,
                addressPatient: dto.addressPatient,
                sexePatient: dto.sexePatient,
                agePatient: Number(dto.agePatient),
                passwordPatient: hash,
            },
        });
        const tokens = await this.getTokens(newPatient.idPatient, newPatient.emailPatient);
        await this.updateRtHash(newPatient.idPatient, tokens.refresh_token);
        return [newPatient, tokens];
    }
    async signinLocal(dto) {
        const patient = await this.prisma.patient.findUnique({
            where: {
                emailPatient: dto.emailPatient,
            },
        });
        if (!patient)
            throw new common_1.ForbiddenException('Access Denied');
        const passwordMatches = await bcrypt.compare(dto.passwordPatient, patient.passwordPatient);
        if (!passwordMatches)
            throw new common_1.ForbiddenException('Access Denied');
        const tokens = await this.getTokens(patient.idPatient, patient.emailPatient);
        await this.updateRtHash(patient.idPatient, tokens.refresh_token);
        return tokens;
    }
    async logout(idPatient) {
        await this.prisma.patient.updateMany({
            where: {
                idPatient: idPatient,
                rtPatient: {
                    not: null,
                },
            },
            data: {
                rtPatient: null,
            },
        });
    }
    async refreshTokens(idPatient, rt) {
        const patient = await this.prisma.patient.findUnique({
            where: {
                idPatient,
            },
        });
        if (!patient || !patient.rtPatient)
            throw new common_1.ForbiddenException('Access Denied');
        const rtMatches = await bcrypt.compare(rt, patient.rtPatient);
        if (!rtMatches)
            throw new common_1.ForbiddenException('Access Denied');
        const tokens = await this.getTokens(patient.idPatient, patient.emailPatient);
        await this.updateRtHash(patient.idPatient, tokens.refresh_token);
        return tokens;
    }
    async updateRtHash(idPatient, rt) {
        const hash = await this.hashData(rt);
        await this.prisma.patient.update({
            where: {
                idPatient,
            },
            data: {
                rtPatient: hash,
            },
        });
    }
    hashData(data) {
        return bcrypt.hash(data, 10);
    }
    async getTokens(idPatient, emailPatient) {
        const [at, rt] = await Promise.all([
            this.jwtService.signAsync({
                sub: idPatient,
                emailPatient,
            }, {
                secret: 'at-secret',
                expiresIn: 60 * 15,
            }),
            this.jwtService.signAsync({
                sub: idPatient,
                emailPatient,
            }, {
                secret: 'rt-secret',
                expiresIn: 60 * 60 * 24 * 7,
            }),
        ]);
        return {
            access_token: at,
            refresh_token: rt,
        };
    }
};
AuthPatientService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, jwt_1.JwtService])
], AuthPatientService);
exports.AuthPatientService = AuthPatientService;
//# sourceMappingURL=auth-patient.service.js.map