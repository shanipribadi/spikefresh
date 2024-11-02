import { assertEquals } from "@std/assert";
import { faker } from '@faker-js/faker';
import type { usersTable } from "./schema/mod.ts";
import { getUser, insertUser } from "./mod.ts";
import { push } from "./dev.ts";

async function databaseTests(t: Deno.TestContext) {
  const { stdout, stderr } = await push();
  console.log(new TextDecoder().decode(stdout));
  console.log(new TextDecoder().decode(stderr));

  await t.step("userSelectNotFoundTest", userSelectNotFoundTest);
  await t.step("userInsertSelectTest", userInsertSelectTest);
}

async function userInsertSelectTest() {
  const user = {
    name: faker.person.fullName(),
    age: faker.number.int(100),
    email: faker.internet.email(),
  };
  const insertedUser = await insertUser(user);
  const userFound: typeof usersTable.$inferSelect = await getUser(
    insertedUser.id,
  );
  assertEquals(userFound, { id: insertedUser.id, ...user });
}

async function userSelectNotFoundTest() {
  const userNotFound: typeof usersTable.$inferSelect = await getUser(0);
  assertEquals(userNotFound, undefined);
}

Deno.test({
  name: "database tests",
  fn: databaseTests,
  sanitizeResources: false,
  sanitizeOps: false,
});
