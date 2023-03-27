import UserRow from "./UserRow";
import style from "./users.module.scss"
import {observer} from "mobx-react-lite";
import {Link} from "react-router-dom";

const UsersLayout = observer(({
                                  users,
                                  incrementPage,
                                  decrementPage,
                                  isDecrementAvailable,
                                  isIncrementAvailable,
                                  deleteUser}) => {
    return <div className={style.wrapper}>
        <table cellSpacing={0} cellPadding={0}>
            <tr>
                <td>ID</td>
                <td>Available</td>
                <td>Name</td>
                <td>Last name</td>
                <td>Email</td>
                <td>Birthday</td>
                <td>Actions</td>
            </tr>
            {users.map(user => <UserRow user={user} key={user.id} deleteUser={deleteUser}/>)}
        </table>
        <div className={style.pagination}>
            <button type='button' onClick={decrementPage} disabled={!isDecrementAvailable}>
                Previous page
            </button>
            <button type="button" onClick={incrementPage} disabled={!isIncrementAvailable}>
                Next page
            </button>
        </div>
        <Link to={"/add_user"}>
            Add user
        </Link>
    </div>

})
export default UsersLayout