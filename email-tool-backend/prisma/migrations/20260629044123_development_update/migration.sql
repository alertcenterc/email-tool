-- CreateTable
CREATE TABLE "Case" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "scamType" TEXT NOT NULL DEFAULT 'unavailable',
    "paymentMethod" TEXT NOT NULL DEFAULT 'unavailable',
    "amount" TEXT NOT NULL DEFAULT 'unavailable',
    "description" TEXT NOT NULL DEFAULT 'unavailable',
    "images" TEXT[],
    "firstName" TEXT NOT NULL DEFAULT 'unavailable',
    "lastName" TEXT NOT NULL DEFAULT 'unavailable',
    "caseId" TEXT NOT NULL DEFAULT 'unavailable',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Case_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Caseactivity" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL DEFAULT 'unavailable',
    "message" TEXT NOT NULL DEFAULT 'unavailable',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Caseactivity_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Case_email_key" ON "Case"("email");

-- CreateIndex
CREATE INDEX "Case_email_idx" ON "Case"("email");

-- CreateIndex
CREATE INDEX "Caseactivity_email_idx" ON "Caseactivity"("email");
