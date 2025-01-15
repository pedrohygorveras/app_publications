/*
  Warnings:

  - You are about to drop the `PublicationHistory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Publication" DROP CONSTRAINT "Publication_author_fkey";

-- DropForeignKey
ALTER TABLE "PublicationHistory" DROP CONSTRAINT "PublicationHistory_publication_id_fkey";

-- DropForeignKey
ALTER TABLE "PublicationHistory" DROP CONSTRAINT "PublicationHistory_updated_by_user_id_fkey";

-- DropTable
DROP TABLE "PublicationHistory";
