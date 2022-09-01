export type Tokens = {
  access_token: string;
  refresh_token: string;
};

export type PatientTokens = [
  {
    idPatient: number;
    lastnamePatient: string;
    firstnamePatient: string;
    emailPatient: string;
    phonePatient: string;
    addressPatient: string;
    sexePatient: string;
    agePatient: number;
    passwordPatient: string;
  },
  {
    access_token: string;
    refresh_token: string;
  },
];
