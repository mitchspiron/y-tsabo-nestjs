import { PrismaService } from '../prisma/prisma.service';
import { DiseaseDto } from './dto';
import { Disease } from './types';
export declare class DiseaseService {
    private prisma;
    constructor(prisma: PrismaService);
    getDiseaseById(id: number): Promise<Disease | null>;
    getDiseases(): Promise<import(".prisma/client").disease[]>;
    createDisease(dto: DiseaseDto): Promise<Disease>;
    updateDiseaseById(id: number, dto: DiseaseDto): Promise<Disease>;
    deleteDiseaseById(id: number): Promise<Disease>;
}
