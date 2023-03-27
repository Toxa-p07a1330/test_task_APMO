import {useState} from "react";
import style from "./addUser.module.scss"
import {userStore} from "../../stores/usersStore";
import { Navigate  } from 'react-router-dom';

const AddUser = () => {
    //ID	Available	Name	Last name	Email	Birthday
    const [isAvailable, setAvailable] = useState(true)
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState('')
    const [birthDate, setBirthDate] = useState(new Date().toISOString().split('T')[0])

    const [redirect, setRedirect] = useState(null)

    const handleAddUserButton = () => {
        const newUserObject = {
            access: isAvailable,
            name: name,
            lastName: lastName,
            email: email,
            birthDate: birthDate
        }
        userStore.addUser(newUserObject);
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
            <button onClick={handleAddUserButton}>Create</button>
        </div>
    </div>
}
export default AddUser