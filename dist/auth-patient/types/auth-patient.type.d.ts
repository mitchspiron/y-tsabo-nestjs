export declare type Tokens = {
    access_token: string;
    refresh_token: string;
};
export declare type PatientTokens = [
    {
        idPatient: number;
        lastnamePatient: string;
        firstnamePatient: string;
        emailPatient: string;
        phonePatient: string;
        addressPatient: string;
        passwordPatient: string;
    },
    {
        access_token: string;
        refresh_token: string;
    }
];
