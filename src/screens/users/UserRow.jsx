import style from "./users.module.scss"
import {userStore} from "../../stores/usersStore";
const UserRow = ({user, deleteUser}) => {
    if (!user.access){
        return <tr>
            <td>{user.id}</td>
            <td>{user.access?"+":"-"}</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td className={style.actions}>
                <button>
                    Edit
                </button>
                <button onClick={()=>deleteUser(user.id)}>
                    Delete
                </button>
            </td>
        </tr>
    }
    return <tr>
        <td>{user.id}</td>
        <td>{user.access?"+":"-"}</td>
        <td>{user.name ?? "-"}</td>
        <td>{user.lastName ?? "-"}</td>
        <td>{user.email ?? "-"}</td>
        <td>{user.birthDate ? new Date(user.birthDate).toLocaleDateString() : "-"}</td>
        <td className={style.actions}>
            <button>
                Edit
            </button>
            <button onClick={()=>deleteUser(user.id)}>
                Delete
            </button>
        </td>
    </tr>
}
export default UserRow