-- AlterTable
ALTER TABLE `treatment` MODIFY `dateTreatment` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AddForeignKey
ALTER TABLE `appointment` ADD CONSTRAINT `appointment_ibfk_1` FOREIGN KEY (`doctor`) REFERENCES `doctor`(`idDoctor`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `appointment` ADD CONSTRAINT `appointment_ibfk_2` FOREIGN KEY (`patient`) REFERENCES `patient`(`idPatient`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `doctor` ADD CONSTRAINT `doctor_ibfk_1` FOREIGN KEY (`speciality`) REFERENCES `doctorspeciality`(`idSpeciality`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `treatment` ADD CONSTRAINT `treatment_ibfk_1` FOREIGN KEY (`doctor`) REFERENCES `doctor`(`idDoctor`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `treatment` ADD CONSTRAINT `treatment_ibfk_2` FOREIGN KEY (`disease`) REFERENCES `disease`(`idDisease`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `treatment` ADD CONSTRAINT `treatment_ibfk_4` FOREIGN KEY (`patient`) REFERENCES `patient`(`idPatient`) ON DELETE CASCADE ON UPDATE CASCADE;
