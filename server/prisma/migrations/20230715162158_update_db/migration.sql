/*
  Warnings:

  - You are about to drop the column `foodTypeId` on the `Restaurant` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Restaurant" DROP CONSTRAINT "Restaurant_foodTypeId_fkey";

-- AlterTable
ALTER TABLE "Menu" ADD COLUMN     "foodTypeId" TEXT;

-- AlterTable
ALTER TABLE "Restaurant" DROP COLUMN "foodTypeId",
ADD COLUMN     "gastronomyId" TEXT;

-- CreateTable
CREATE TABLE "Gastronomy" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Gastronomy_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Restaurant" ADD CONSTRAINT "Restaurant_gastronomyId_fkey" FOREIGN KEY ("gastronomyId") REFERENCES "Gastronomy"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Menu" ADD CONSTRAINT "Menu_foodTypeId_fkey" FOREIGN KEY ("foodTypeId") REFERENCES "FoodType"("id") ON DELETE SET NULL ON UPDATE CASCADE;
