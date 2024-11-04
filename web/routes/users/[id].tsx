import { page } from "fresh";
import { define } from "../../utils.ts";
import { getUser, type userType } from "@spikefresh/store";

export const handler = define.handlers({
  async GET(ctx) {
    const id = parseInt(ctx.params.id);
    const user = await getUser(id);
    return page(user);
  },
});

export default define.page<typeof handler>(UserById);

function UserById({ data }: { data: userType }) {
  return (
    <>
      <h1>Hello {data.name}!</h1>
      <section className="overflow-x-auto">
        <table className="table table-zebra">
          <tbody>
            <tr>
              <th>Name</th>
              <td>{data.name}</td>
            </tr>
            <tr>
              <th>Age</th>
              <td>{data.age}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{data.email}</td>
            </tr>
          </tbody>
        </table>
        <p>Welcome</p>
      </section>
    </>
  );
}
