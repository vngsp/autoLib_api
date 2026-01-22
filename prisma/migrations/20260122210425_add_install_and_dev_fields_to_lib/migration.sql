ALTER TABLE "Lib"
ADD COLUMN "name" TEXT,
ADD COLUMN "category" TEXT,
ADD COLUMN "install" TEXT,
ADD COLUMN "dev" TEXT;

UPDATE "Lib"
SET
  "name" = 'legacy',
  "category" = 'legacy',
  "install" = "command";


ALTER TABLE "Lib"
DROP COLUMN "command",
DROP COLUMN "type";

ALTER TABLE "Lib"
ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "category" SET NOT NULL,
ALTER COLUMN "install" SET NOT NULL;
