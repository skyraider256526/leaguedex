# Migration `20200911192543-make_game_id_nullable`

This migration has been generated by Donny Roufs at 9/11/2020, 9:25:43 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Matchup" ALTER COLUMN "game_id" DROP NOT NULL;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200822210619-add_private_field_to_matchup..20200911192543-make_game_id_nullable
--- datamodel.dml
+++ datamodel.dml
@@ -2,9 +2,9 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
@@ -41,9 +41,9 @@
   games_played Int      @default(0)
   games_won    Int?     @default(0)
   games_lost   Int?     @default(0)
   private      Boolean  @default(true)
-  game_id      String
+  game_id      String? 
   champion_id  Int
   opponent_id  Int
   lane         String
   championA    Champion @relation("matchup_champion_id", fields: [champion_id], references: [id])
```


