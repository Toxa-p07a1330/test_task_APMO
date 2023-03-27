import style from "./users.module.scss";
import { Link } from "react-router-dom";

const UserRow = ({ user, deleteUser }) => {
  if (!user.access) {
    return (
      <tr>
        <td>{user.id}</td>
        <td>{user.access ? "+" : "-"}</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td className={style.actions}>
          <Link to={"/edit_user?id=" + user.id}>Edit</Link>
          <button onClick={() => deleteUser(user.id)}>Delete</button>
        </td>
      </tr>
    );
  }
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.access ? "+" : "-"}</td>
      <td>{user.name ?? "-"}</td>
      <td>{user.lastName ?? "-"}</td>
      <td>{user.email ?? "-"}</td>
      <td>
        {user.birthDate ? new Date(user.birthDate).toLocaleDateString() : "-"}
      </td>
      <td className={style.actions}>
        <Link to={"/edit_user?id=" + user.id}>Edit</Link>
        <button onClick={() => deleteUser(user.id)}>Delete</button>
      </td>
    </tr>
  );
};
export default UserRow