-- AlterTable
ALTER TABLE `user` ADD COLUMN `currentPlan` ENUM('FREE', 'STARTER', 'PRO', 'ENTERPRISE') NOT NULL DEFAULT 'FREE',
    ADD COLUMN `planExpiresAt` DATETIME(3) NULL;

-- CreateTable
CREATE TABLE `Subscription` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `plan` ENUM('FREE', 'STARTER', 'PRO', 'ENTERPRISE') NOT NULL,
    `status` ENUM('ACTIVE', 'EXPIRED', 'CANCELLED', 'PENDING') NOT NULL DEFAULT 'PENDING',
    `startDate` DATETIME(3) NOT NULL,
    `endDate` DATETIME(3) NOT NULL,
    `razorpayOrderId` VARCHAR(191) NULL,
    `razorpayPaymentId` VARCHAR(191) NULL,
    `razorpaySignature` VARCHAR(191) NULL,
    `amountPaid` DOUBLE NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Subscription_razorpayOrderId_key`(`razorpayOrderId`),
    INDEX `Subscription_userId_idx`(`userId`),
    INDEX `Subscription_status_idx`(`status`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PaymentHistory` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `subscriptionId` VARCHAR(191) NULL,
    `razorpayOrderId` VARCHAR(191) NOT NULL,
    `razorpayPaymentId` VARCHAR(191) NULL,
    `amount` DOUBLE NOT NULL,
    `currency` VARCHAR(191) NOT NULL DEFAULT 'INR',
    `plan` ENUM('FREE', 'STARTER', 'PRO', 'ENTERPRISE') NOT NULL,
    `status` ENUM('PENDING', 'CAPTURED', 'FAILED', 'REFUNDED') NOT NULL DEFAULT 'PENDING',
    `failureReason` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `PaymentHistory_razorpayOrderId_key`(`razorpayOrderId`),
    INDEX `PaymentHistory_userId_idx`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Subscription` ADD CONSTRAINT `Subscription_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PaymentHistory` ADD CONSTRAINT `PaymentHistory_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
