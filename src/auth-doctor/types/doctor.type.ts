export type Tokens = {
  access_token: string;
  refresh_token: string;
};

export type Doctor = {
  idDoctor: number;
  lastnameDoctor: string;
  firstnameDoctor: string;
  mailDoctor: string;
  phoneDoctor: string;
  addressDoctor: string;
  speciality: number;
  passwordDoctor: string;
};

export type DoctorTokens = [
  {
    idDoctor: number;
    lastnameDoctor: string;
    firstnameDoctor: string;
    emailDoctor: string;
    phoneDoctor: string;
    addressDoctor: string;
    speciality: number;
    passwordDoctor: string;
  },
  {
    access_token: string;
    refresh_token: string;
  },
];
