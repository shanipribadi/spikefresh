import { page } from "fresh";
import { define } from "../../utils.ts";
import { getUser, type userType } from "@spikefresh/store";

type UserData = userType | undefined;

export const handler = define.handlers({
  async GET(ctx) {
    const id = parseInt(ctx.params.id);
    if (Number.isNaN(id)) {
      return page(undefined)
    }
    const user = await getUser(id);
    return page(user);
  },
});

export default define.page<typeof handler>(UserById);

function UserById({ data }: { data: UserData }) {
  if (data) {
    return (
      <>
        <section className="overflow-x-auto prose">
          <h2>Hello {data.name}!</h2>
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
  return (
    <div>
      <h1>User Not Found</h1>
    </div>
  );
}
