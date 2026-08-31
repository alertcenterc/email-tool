-- CreateTable
CREATE TABLE "Siteclick" (
    "id" TEXT NOT NULL,
    "profileId" TEXT NOT NULL,
    "target" TEXT NOT NULL DEFAULT 'siteclicks',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Siteclick_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sitevisit" (
    "id" TEXT NOT NULL,
    "profileId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Sitevisit_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Siteclick_profileId_idx" ON "Siteclick"("profileId");

-- CreateIndex
CREATE INDEX "Siteclick_target_idx" ON "Siteclick"("target");

-- CreateIndex
CREATE INDEX "Siteclick_createdAt_idx" ON "Siteclick"("createdAt");

-- CreateIndex
CREATE INDEX "Sitevisit_profileId_idx" ON "Sitevisit"("profileId");

-- CreateIndex
CREATE INDEX "Sitevisit_createdAt_idx" ON "Sitevisit"("createdAt");
