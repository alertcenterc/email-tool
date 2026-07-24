-- CreateTable
CREATE TABLE "Support" (
    "id" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'unavailable',
    "when" TEXT NOT NULL DEFAULT 'unavailable',
    "amount" TEXT NOT NULL DEFAULT 'unavailable',
    "employment" TEXT NOT NULL DEFAULT 'unavailable',
    "street" TEXT NOT NULL DEFAULT 'unavailable',
    "city" TEXT NOT NULL DEFAULT 'unavailable',
    "state" TEXT NOT NULL DEFAULT 'unavailable',
    "zipcode" TEXT NOT NULL DEFAULT 'unavailable',
    "firstname" TEXT NOT NULL DEFAULT 'unavailable',
    "lastname" TEXT NOT NULL DEFAULT 'unavailable',
    "age" TEXT NOT NULL DEFAULT 'unavailable',
    "email" TEXT NOT NULL DEFAULT 'unavailable',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Support_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Support_phone_key" ON "Support"("phone");

-- CreateIndex
CREATE INDEX "Support_email_idx" ON "Support"("email");
