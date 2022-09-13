export type Treatment = {
  idTreatment: number;
  dateTreatment: string | Date;
  patient: number;
  doctor: number;
  disease: number;
  appointment: number;
  isTreated: boolean;
};

export type TreatmentUpdate = {
  idTreatment: number;
  patient: number;
  doctor: number;
  disease: number;
  appointment: number;
};
