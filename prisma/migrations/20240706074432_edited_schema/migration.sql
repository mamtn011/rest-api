/*
  Warnings:

  - You are about to drop the `Manufacturer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Manufacturer" DROP CONSTRAINT "Manufacturer_itemId_fkey";

-- AlterTable
ALTER TABLE "items" ADD COLUMN     "manufacturer" JSONB;

-- DropTable
DROP TABLE "Manufacturer";
