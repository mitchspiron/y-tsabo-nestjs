-- CreateTable
CREATE TABLE `appointment` (
    `idAppointment` INTEGER NOT NULL AUTO_INCREMENT,
    `dateAppointment` DATETIME(0) NOT NULL,
    `timeAppointment` DATETIME(0) NOT NULL,
    `patient` INTEGER NOT NULL,
    `doctor` INTEGER NOT NULL,
    `isValid` BOOLEAN NOT NULL,

    INDEX `doctor`(`doctor`),
    INDEX `patient`(`patient`),
    PRIMARY KEY (`idAppointment`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `disease` (
    `idDisease` INTEGER NOT NULL AUTO_INCREMENT,
    `nameDisease` VARCHAR(191) NOT NULL,
    `detailsDisease` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idDisease`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `doctor` (
    `idDoctor` INTEGER NOT NULL AUTO_INCREMENT,
    `lastnameDoctor` VARCHAR(191) NOT NULL,
    `firstnameDoctor` VARCHAR(191) NOT NULL,
    `emailDoctor` VARCHAR(191) NOT NULL,
    `phoneDoctor` VARCHAR(191) NOT NULL,
    `addressDoctor` VARCHAR(191) NOT NULL,
    `speciality` INTEGER NOT NULL,
    `passwordDoctor` VARCHAR(191) NOT NULL,
    `rtDoctor` VARCHAR(191) NULL,

    UNIQUE INDEX `emailDoctor`(`emailDoctor`),
    INDEX `speciality`(`speciality`),
    PRIMARY KEY (`idDoctor`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `doctorspeciality` (
    `idSpeciality` INTEGER NOT NULL AUTO_INCREMENT,
    `nameSpeciality` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idSpeciality`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `patient` (
    `idPatient` INTEGER NOT NULL AUTO_INCREMENT,
    `lastnamePatient` VARCHAR(191) NOT NULL,
    `firstnamePatient` VARCHAR(191) NOT NULL,
    `emailPatient` VARCHAR(191) NOT NULL,
    `phonePatient` VARCHAR(191) NOT NULL,
    `addressPatient` VARCHAR(191) NOT NULL,
    `passwordPatient` VARCHAR(191) NOT NULL,
    `rtPatient` VARCHAR(191) NULL,

    UNIQUE INDEX `emailPatient`(`emailPatient`),
    PRIMARY KEY (`idPatient`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `treatment` (
    `idTreatment` INTEGER NOT NULL AUTO_INCREMENT,
    `dateTreatment` DATETIME(0) NOT NULL,
    `patient` INTEGER NOT NULL,
    `doctor` INTEGER NOT NULL,
    `disease` INTEGER NOT NULL,
    `isTreated` BOOLEAN NOT NULL,

    INDEX `disease`(`disease`),
    INDEX `doctor`(`doctor`),
    INDEX `patient`(`patient`),
    PRIMARY KEY (`idTreatment`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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
