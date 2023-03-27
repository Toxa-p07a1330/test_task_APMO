import {BOOT_STATES, userStore} from "../../stores/usersStore";
import {observer} from "mobx-react-lite";
import UsersLayout from "./UsersLayout";

const Users = observer(() => {

    if (
        userStore.getState() === BOOT_STATES.InPROGRESS ||
        userStore.getState() === BOOT_STATES.NONE
    ) {
        return <div>
            Loading...
        </div>
    }

    if (userStore.getState() === BOOT_STATES.ERROR) {
        return <div>
            Error: Something get wrong
        </div>
    }
    return <UsersLayout users={userStore.getData().users}/>
})


export default Users