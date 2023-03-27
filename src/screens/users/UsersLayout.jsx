import UserRow from "./UserRow";
import style from "./users.module.scss"
const UsersLayout = ({users}) => {
    return <div className={style.wrapper}>
        <table cellSpacing={0} cellPadding={0}>
            <tr>
                <td>ID</td>
                <td>Available</td>
                <td>Name</td>
                <td>Last name</td>
                <td>Email</td>
                <td>Birthday</td>
            </tr>
            {users.map(user => <UserRow user={user} key={user.id}/>)}
        </table>
    </div>

}
export default UsersLayout