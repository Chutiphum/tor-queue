-- CreateTable
CREATE TABLE "Room" (
    "qId" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "images" TEXT[],
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("qId")
);

-- CreateTable
CREATE TABLE "Queue" (
    "eId" SERIAL NOT NULL,
    "qId" INTEGER NOT NULL,
    "uId" INTEGER NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "finished" BOOLEAN NOT NULL,
    "deleted" BOOLEAN NOT NULL,
    "deletionTime" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Queue_pkey" PRIMARY KEY ("eId")
);

-- CreateTable
CREATE TABLE "User" (
    "uId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("uId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Room_title_key" ON "Room"("title");

-- AddForeignKey
ALTER TABLE "Queue" ADD CONSTRAINT "Queue_qId_fkey" FOREIGN KEY ("qId") REFERENCES "Room"("qId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Queue" ADD CONSTRAINT "Queue_uId_fkey" FOREIGN KEY ("uId") REFERENCES "User"("uId") ON DELETE RESTRICT ON UPDATE CASCADE;
