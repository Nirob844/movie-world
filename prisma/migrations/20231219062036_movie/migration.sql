/*
  Warnings:

  - Changed the type of `description` on the `movie` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "movie" DROP COLUMN "description",
ADD COLUMN     "description" TEXT NOT NULL;
