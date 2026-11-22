/*
  Warnings:

  - You are about to drop the column `dueDeta` on the `tasks` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `tasks` DROP COLUMN `dueDeta`,
    ADD COLUMN `dueDate` DATETIME(3) NULL;
