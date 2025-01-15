-- CreateEnum
CREATE TYPE "Status" AS ENUM ('new', 'read', 'sent_to_lawyer', 'completed');

-- CreateTable
CREATE TABLE "User" (
    "user_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Publication" (
    "publication_id" TEXT NOT NULL,
    "process_number" TEXT NOT NULL,
    "publication_date" TIMESTAMP(3) NOT NULL,
    "author" TEXT NOT NULL,
    "lawyer" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "principal_value" DECIMAL(65,30) NOT NULL,
    "interest_value" DECIMAL(65,30) NOT NULL,
    "lawyer_fees" DECIMAL(65,30) NOT NULL,
    "defendant" TEXT NOT NULL,
    "status" "Status" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Publication_pkey" PRIMARY KEY ("publication_id")
);

-- CreateTable
CREATE TABLE "PublicationHistory" (
    "publication_history_id" TEXT NOT NULL,
    "updated_by_user_id" TEXT NOT NULL,
    "publication_id" TEXT NOT NULL,
    "status" "Status" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PublicationHistory_pkey" PRIMARY KEY ("publication_history_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Publication" ADD CONSTRAINT "Publication_author_fkey" FOREIGN KEY ("author") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PublicationHistory" ADD CONSTRAINT "PublicationHistory_updated_by_user_id_fkey" FOREIGN KEY ("updated_by_user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PublicationHistory" ADD CONSTRAINT "PublicationHistory_publication_id_fkey" FOREIGN KEY ("publication_id") REFERENCES "Publication"("publication_id") ON DELETE RESTRICT ON UPDATE CASCADE;
