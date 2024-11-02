import "@std/dotenv/load";
import { drizzle } from "drizzle-orm/node-postgres";
import { eq } from "drizzle-orm";
import { usersTable } from "./schema/mod.ts";

export const db = drizzle(Deno.env.get("DATABASE_URL")!);

export async function insertUser(user: typeof usersTable.$inferInsert) {
  const insertedUser = await db.insert(usersTable).values(user).returning();
  return insertedUser[0];
}

export async function getUser(id: number) {
  const user = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.id, id))
    .limit(1);
  return user[0];
}

export type userType = typeof usersTable.$inferSelect
