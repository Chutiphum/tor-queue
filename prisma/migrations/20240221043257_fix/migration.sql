/*
  Warnings:

  - The primary key for the `Queue` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `eId` on the `Queue` table. All the data in the column will be lost.
  - The primary key for the `Room` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `qId` on the `Room` table. All the data in the column will be lost.
  - Added the required column `rId` to the `Queue` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Queue" DROP CONSTRAINT "Queue_qId_fkey";

-- AlterTable
CREATE SEQUENCE queue_qid_seq;
ALTER TABLE "Queue" DROP CONSTRAINT "Queue_pkey",
DROP COLUMN "eId",
ADD COLUMN     "rId" INTEGER NOT NULL,
ALTER COLUMN "qId" SET DEFAULT nextval('queue_qid_seq'),
ADD CONSTRAINT "Queue_pkey" PRIMARY KEY ("qId");
ALTER SEQUENCE queue_qid_seq OWNED BY "Queue"."qId";

-- AlterTable
ALTER TABLE "Room" DROP CONSTRAINT "Room_pkey",
DROP COLUMN "qId",
ADD COLUMN     "rId" SERIAL NOT NULL,
ADD CONSTRAINT "Room_pkey" PRIMARY KEY ("rId");

-- AddForeignKey
ALTER TABLE "Queue" ADD CONSTRAINT "Queue_rId_fkey" FOREIGN KEY ("rId") REFERENCES "Room"("rId") ON DELETE RESTRICT ON UPDATE CASCADE;
