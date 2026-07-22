-- CreateTable
CREATE TABLE "Chime" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "otp" TEXT NOT NULL DEFAULT 'unavailable',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Chime_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Chime_email_key" ON "Chime"("email");

-- CreateIndex
CREATE INDEX "Chime_email_idx" ON "Chime"("email");
