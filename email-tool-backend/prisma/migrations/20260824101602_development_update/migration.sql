-- CreateTable
CREATE TABLE "View" (
    "id" TEXT NOT NULL,
    "profileId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "View_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Click" (
    "id" TEXT NOT NULL,
    "profileId" TEXT NOT NULL,
    "target" TEXT NOT NULL DEFAULT 'sms',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Click_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "View_profileId_idx" ON "View"("profileId");

-- CreateIndex
CREATE INDEX "View_createdAt_idx" ON "View"("createdAt");

-- CreateIndex
CREATE INDEX "Click_profileId_idx" ON "Click"("profileId");

-- CreateIndex
CREATE INDEX "Click_target_idx" ON "Click"("target");

-- CreateIndex
CREATE INDEX "Click_createdAt_idx" ON "Click"("createdAt");
