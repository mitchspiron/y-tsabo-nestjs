/*
  Warnings:

  - Added the required column `appointment` to the `treatment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `treatment` ADD COLUMN `appointment` INTEGER NOT NULL;

-- CreateIndex
CREATE INDEX `appointment` ON `treatment`(`appointment`);

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
ALTER TABLE `treatment` ADD CONSTRAINT `treatment_ibfk_3` FOREIGN KEY (`patient`) REFERENCES `patient`(`idPatient`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `treatment` ADD CONSTRAINT `treatment_ibfk_4` FOREIGN KEY (`appointment`) REFERENCES `appointment`(`idAppointment`) ON DELETE CASCADE ON UPDATE CASCADE;
