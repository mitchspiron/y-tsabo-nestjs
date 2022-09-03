export type Appointment = {
  dateAppointment: string;
  timeAppointment: string;
  patient: number;
  doctor: number;
  isValid: boolean;
};

/* export type PatientAppointment = [
  {
    idApppointment: number;
    dateAppointment: Date;
    timeAppointment: Date;
    isValid: boolean;
    doctor_appointmentTodoctor: {
      idDoctor: number;
      lastnameDoctor: string;
      firstnameDoctor: string;
      emailDoctor: string;
      phoneDoctor: string;
    };
  },
];

export type DoctorAppointment = {
  dateAppointment: Date;
  timeAppointment: Date;
  patient: number;
  isValid: boolean;
  patient_appointmentTopatient: {
    idPatient: number;
    lastnamePatient: string;
    firstnamePatient: string;
    emailPatient: string;
    phonePatient: string;
  };
}; */
