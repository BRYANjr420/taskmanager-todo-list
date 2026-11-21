-- CreateTable
CREATE TABLE `tasks` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `guestId` VARCHAR(36) NOT NULL,
    `heading` VARCHAR(80) NOT NULL,
    `descriptions` TEXT NOT NULL,
    `completed` BOOLEAN NOT NULL DEFAULT false,
    `dueDeta` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `tasks_guestId_idx`(`guestId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
