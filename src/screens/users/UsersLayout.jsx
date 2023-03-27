import UserRow from "./UserRow";
import style from "./users.module.scss"
import {observer} from "mobx-react-lite";
import {Link} from "react-router-dom";
import Select from 'react-select';

const UsersLayout = observer(({
                                  users,
                                  incrementPage,
                                  decrementPage,
                                  isDecrementAvailable,
                                  isIncrementAvailable,
                                  deleteUser,
                                  filterHandler,
                                  filteringOptions
                              }) => {
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
            <tr>
                <td className={style.filter}><Select isMulti={true} options={filteringOptions.idList}/> </td>
                <td className={style.filter}><Select options={filteringOptions.availableList}/></td>
                <td className={style.filter}><Select isMulti={true} options={filteringOptions.nameList}/></td>
                <td className={style.filter}><Select isMulti={true} options={filteringOptions.lastNameList}/></td>
                <td className={style.filter}><Select isMulti={true} options={filteringOptions.emailList}/></td>
                <td className={style.filter}><Select isMulti={true} options={filteringOptions.birthDate}/></td>
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