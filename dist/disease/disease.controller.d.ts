import { DiseaseService } from './disease.service';
import { DiseaseDto } from './dto';
import { Disease } from './types';
export declare class DiseaseController {
    private readonly diseaseService;
    constructor(diseaseService: DiseaseService);
    getDiseases(): Promise<import(".prisma/client").disease[]>;
    getDiseaseById(id: number): Promise<Disease>;
    createDisease(dto: DiseaseDto): Promise<Disease>;
    updateDiseaseById(id: number, dto: DiseaseDto): Promise<Disease>;
    deleteDiseaseById(id: number): Promise<Disease>;
}
