-- DropForeignKey
ALTER TABLE "Queue" DROP CONSTRAINT "Queue_rId_fkey";

-- DropForeignKey
ALTER TABLE "Queue" DROP CONSTRAINT "Queue_uId_fkey";

-- AddForeignKey
ALTER TABLE "Queue" ADD CONSTRAINT "Queue_rId_fkey" FOREIGN KEY ("rId") REFERENCES "Room"("rId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Queue" ADD CONSTRAINT "Queue_uId_fkey" FOREIGN KEY ("uId") REFERENCES "User"("uId") ON DELETE CASCADE ON UPDATE CASCADE;
