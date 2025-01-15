-- DropForeignKey
ALTER TABLE "Publication" DROP CONSTRAINT "Publication_author_fkey";

-- AlterTable
ALTER TABLE "Publication" ALTER COLUMN "process_number" DROP NOT NULL,
ALTER COLUMN "publication_date" DROP NOT NULL,
ALTER COLUMN "author" DROP NOT NULL,
ALTER COLUMN "lawyer" DROP NOT NULL,
ALTER COLUMN "content" DROP NOT NULL,
ALTER COLUMN "principal_value" DROP NOT NULL,
ALTER COLUMN "interest_value" DROP NOT NULL,
ALTER COLUMN "lawyer_fees" DROP NOT NULL,
ALTER COLUMN "defendant" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Publication" ADD CONSTRAINT "Publication_author_fkey" FOREIGN KEY ("author") REFERENCES "User"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;
