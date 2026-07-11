-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `passwordHash` VARCHAR(191) NOT NULL,
    `plan` ENUM('FREE', 'STARTER', 'PRO', 'ENTERPRISE') NOT NULL DEFAULT 'FREE',
    `isVerified` BOOLEAN NOT NULL DEFAULT false,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `lastLoginAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Session` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `token` VARCHAR(191) NOT NULL,
    `ipAddress` VARCHAR(191) NULL,
    `userAgent` VARCHAR(191) NULL,
    `expiresAt` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Session_token_key`(`token`),
    INDEX `Session_userId_idx`(`userId`),
    INDEX `Session_token_idx`(`token`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Panel` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `location` VARCHAR(191) NOT NULL,
    `ratedPower` DOUBLE NOT NULL,
    `installDate` DATETIME(3) NOT NULL,
    `warrantyYears` INTEGER NOT NULL DEFAULT 25,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `currentFault` ENUM('NONE', 'DUST', 'TEMPERATURE_SPIKE', 'PARTIAL_SHADING', 'INVERTER_FAULT', 'WIRING_ISSUE') NOT NULL DEFAULT 'NONE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `Panel_userId_idx`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PanelReading` (
    `id` VARCHAR(191) NOT NULL,
    `panelId` VARCHAR(191) NOT NULL,
    `timestamp` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `voltage` DOUBLE NOT NULL,
    `current` DOUBLE NOT NULL,
    `power` DOUBLE NOT NULL,
    `temperature` DOUBLE NOT NULL,
    `irradiance` DOUBLE NOT NULL,
    `humidity` DOUBLE NOT NULL,
    `efficiency` DOUBLE NOT NULL,

    INDEX `PanelReading_panelId_timestamp_idx`(`panelId`, `timestamp`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Alert` (
    `id` VARCHAR(191) NOT NULL,
    `panelId` VARCHAR(191) NOT NULL,
    `severity` ENUM('CRITICAL', 'WARNING', 'INFO') NOT NULL,
    `category` ENUM('DUST', 'TEMPERATURE', 'SHADING', 'INVERTER', 'WIRING', 'NORMAL') NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `message` TEXT NOT NULL,
    `actionRequired` TEXT NOT NULL,
    `estimatedLoss` DOUBLE NULL,
    `resolved` BOOLEAN NOT NULL DEFAULT false,
    `resolvedAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `Alert_panelId_resolved_idx`(`panelId`, `resolved`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DailySummary` (
    `id` VARCHAR(191) NOT NULL,
    `panelId` VARCHAR(191) NOT NULL,
    `date` DATE NOT NULL,
    `totalEnergy` DOUBLE NOT NULL,
    `avgEfficiency` DOUBLE NOT NULL,
    `moneySaved` DOUBLE NOT NULL,
    `co2Offset` DOUBLE NOT NULL,
    `peakPower` DOUBLE NOT NULL,
    `peakTime` DATETIME(3) NOT NULL,

    INDEX `DailySummary_panelId_idx`(`panelId`),
    UNIQUE INDEX `DailySummary_panelId_date_key`(`panelId`, `date`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SystemConfig` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `systemName` VARCHAR(191) NOT NULL DEFAULT 'My Solar System',
    `totalCapacity` DOUBLE NOT NULL DEFAULT 1.8,
    `location` VARCHAR(191) NOT NULL DEFAULT 'Lucknow, UP, India',
    `tariffRate` DOUBLE NOT NULL DEFAULT 8.0,
    `installDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `SystemConfig_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Session` ADD CONSTRAINT `Session_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Panel` ADD CONSTRAINT `Panel_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PanelReading` ADD CONSTRAINT `PanelReading_panelId_fkey` FOREIGN KEY (`panelId`) REFERENCES `Panel`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Alert` ADD CONSTRAINT `Alert_panelId_fkey` FOREIGN KEY (`panelId`) REFERENCES `Panel`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DailySummary` ADD CONSTRAINT `DailySummary_panelId_fkey` FOREIGN KEY (`panelId`) REFERENCES `Panel`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SystemConfig` ADD CONSTRAINT `SystemConfig_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
