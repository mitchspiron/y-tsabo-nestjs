import { IsNotEmpty, IsString } from 'class-validator';

export class AppointmentDto {
  @IsNotEmpty()
  @IsString()
  dateAppointment: string;
  /* @Type(() => Date)
  dateAppointment: Date = new Date('dd-MMM-YYYY'); */
  @IsNotEmpty()
  @IsString()
  timeAppointment: string;
  /* @Type(() => Date)
  timeAppointment: Date = new Date(new Date('HH:mm')); */
  @IsNotEmpty()
  patient: number;

  @IsNotEmpty()
  doctor: number;

  isValid?: boolean;
}
