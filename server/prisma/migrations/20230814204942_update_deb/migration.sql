/*
  Warnings:

  - Added the required column `a` to the `WishList` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "WishList" ADD COLUMN     "a" TEXT NOT NULL;
