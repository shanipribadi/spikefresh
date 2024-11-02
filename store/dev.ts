export async function push() {
  const command = new Deno.Command("deno", {
    args: ["task", "db:push"],
  });
  const { code, stdout, stderr } = await command.output();
  return { code, stdout, stderr };
}

