-- CreateTable
CREATE TABLE "TenderItem" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "TenderItem_pkey" PRIMARY KEY ("id")
);
