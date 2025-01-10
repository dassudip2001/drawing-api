/*
  Warnings:

  - A unique constraint covering the columns `[accession_number]` on the table `Post` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Post_accession_number_key` ON `Post`(`accession_number`);
