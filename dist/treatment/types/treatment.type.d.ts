export declare type Treatment = {
    idTreatment: number;
    dateTreatment: string | Date;
    patient: number;
    doctor: number;
    disease: number;
    appointment: number;
    isTreated: boolean;
};
export declare type TreatmentUpdate = {
    idTreatment: number;
    patient: number;
    doctor: number;
    disease: number;
    appointment: number;
};
