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
exports.AuthDoctorService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let AuthDoctorService = class AuthDoctorService {
    constructor(prisma, jwtService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
    }
    async signupLocal(dto) {
        const hash = await this.hashData(dto.passwordDoctor);
        const speciality = Number(dto.speciality);
        const newDoctor = await this.prisma.doctor.create({
            data: {
                matriculeDoctor: dto.matriculeDoctor,
                lastnameDoctor: dto.lastnameDoctor,
                firstnameDoctor: dto.firstnameDoctor,
                emailDoctor: dto.emailDoctor,
                phoneDoctor: dto.phoneDoctor,
                addressDoctor: dto.addressDoctor,
                speciality,
                passwordDoctor: hash,
            },
        });
        const tokens = await this.getTokens(newDoctor.idDoctor, newDoctor.emailDoctor);
        await this.updateRtHash(newDoctor.idDoctor, tokens.refresh_token);
        return [newDoctor, tokens];
    }
    async signinLocal(dto) {
        const doctor = await this.prisma.doctor.findUnique({
            where: {
                emailDoctor: dto.emailDoctor,
            },
        });
        if (!doctor)
            throw new common_1.ForbiddenException('Access Denied');
        const passwordMatches = await bcrypt.compare(dto.passwordDoctor, doctor.passwordDoctor);
        if (!passwordMatches)
            throw new common_1.ForbiddenException('Access Denied');
        const tokens = await this.getTokens(doctor.idDoctor, doctor.emailDoctor);
        await this.updateRtHash(doctor.idDoctor, tokens.refresh_token);
        return tokens;
    }
    async logout(idDoctor) {
        await this.prisma.doctor.updateMany({
            where: {
                idDoctor: idDoctor,
                rtDoctor: {
                    not: null,
                },
            },
            data: {
                rtDoctor: null,
            },
        });
    }
    async refreshTokens(idDoctor, rt) {
        const doctor = await this.prisma.doctor.findUnique({
            where: {
                idDoctor,
            },
        });
        if (!doctor || !doctor.rtDoctor)
            throw new common_1.ForbiddenException('Access Denied');
        const rtMatches = await bcrypt.compare(rt, doctor.rtDoctor);
        if (!rtMatches)
            throw new common_1.ForbiddenException('Access Denied');
        const tokens = await this.getTokens(doctor.idDoctor, doctor.emailDoctor);
        await this.updateRtHash(doctor.idDoctor, tokens.refresh_token);
        return tokens;
    }
    async updateRtHash(idDoctor, rt) {
        const hash = await this.hashData(rt);
        await this.prisma.doctor.update({
            where: {
                idDoctor,
            },
            data: {
                rtDoctor: hash,
            },
        });
    }
    hashData(data) {
        return bcrypt.hash(data, 10);
    }
    async getTokens(idDoctor, emailDoctor) {
        const [at, rt] = await Promise.all([
            this.jwtService.signAsync({
                sub: idDoctor,
                emailDoctor,
            }, {
                secret: 'at-secret',
                expiresIn: 60 * 15,
            }),
            this.jwtService.signAsync({
                sub: idDoctor,
                emailDoctor,
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
AuthDoctorService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, jwt_1.JwtService])
], AuthDoctorService);
exports.AuthDoctorService = AuthDoctorService;
//# sourceMappingURL=auth-doctor.service.js.map