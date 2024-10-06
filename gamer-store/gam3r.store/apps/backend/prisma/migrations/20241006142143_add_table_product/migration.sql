-- CreateTable
CREATE TABLE "Prisma" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "review" TEXT NOT NULL,
    "videoReview" TEXT NOT NULL,
    "tags" TEXT[],
    "basePrice" DOUBLE PRECISION NOT NULL,
    "promotionalPrice" DOUBLE PRECISION NOT NULL,
    "highestPrice" DOUBLE PRECISION NOT NULL,
    "lowestPrice" DOUBLE PRECISION NOT NULL,
    "averagePrice" DOUBLE PRECISION NOT NULL,
    "specifications" JSONB NOT NULL,

    CONSTRAINT "Prisma_pkey" PRIMARY KEY ("id")
);
