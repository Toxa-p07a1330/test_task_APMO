import {useEffect, useState} from "react";
import style from "./editUser.module.scss"
import {userStore} from "../../stores/usersStore";
import { Navigate  } from 'react-router-dom';
import getQueryParams from "../../utils/getQueryParams";

const EditUser = () => {
      const [id, setId] = useState(getQueryParams().id)
    const user=userStore.getData().find(user=>user?.id===id);
    const [isAvailable, setAvailable] = useState(user?.access)
    const [name, setName] = useState(user?.name || "")
    const [lastName, setLastName] = useState(user?.lastName || "")
    const [email, setEmail] = useState(user?.email || "")
    const timestamp = Date.parse(user?.birthDate);
    let date = new Date();
    if (isNaN(timestamp) === false) {
        date = new Date(timestamp);
    }
    const [birthDate, setBirthDate] = useState(date.toISOString().split('T')[0])
    const [redirect, setRedirect] = useState(null)


    const handleAddUserButton = () => {
        const newUserObject = {
            id: id,
            access: isAvailable,
            name: name,
            lastName: lastName,
            email: email,
            birthDate: birthDate
        }
        userStore.editUser(newUserObject);
        setRedirect("/users")

    }
    if (redirect)
        return <Navigate  to={redirect}/>
    return <div className={style.wrapper}>
        <div>
            <span>
                isAvailable
            </span>
            <input type="checkbox" checked={isAvailable} onChange={e => setAvailable(e.target.checked)} className={style.checkbox}/>
        </div>
        <div>
            <span>Name</span>
            <input type={"text"} value={name} onChange={e => setName(e.target.value)}/>
        </div>
        <div>
            <span>LastName</span>
            <input type={"text"} value={lastName} onChange={e => setLastName(e.target.value)}/>
        </div>
        <div>
            <span>Email</span>
            <input type={"email"} value={email} onChange={e => setEmail(e.target.value)}/>
        </div>
        <div>
            <div>Birthday</div>
            <input type={"date"} value={birthDate} onChange={e => setBirthDate(e.target.value)}/>
        </div>
        <div>
            <button onClick={handleAddUserButton}>Update</button>
        </div>
    </div>
}
export default EditUser