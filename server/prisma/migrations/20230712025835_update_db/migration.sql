/*
  Warnings:

  - You are about to drop the column `passwotd` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "passwotd",
ADD COLUMN     "password" TEXT;
