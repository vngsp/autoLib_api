/*
  Warnings:

  - Added the required column `packageManagerId` to the `Lib` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Lib" ADD COLUMN     "packageManagerId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "PackageManager" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "install" TEXT NOT NULL,

    CONSTRAINT "PackageManager_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Lib" ADD CONSTRAINT "Lib_packageManagerId_fkey" FOREIGN KEY ("packageManagerId") REFERENCES "PackageManager"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
