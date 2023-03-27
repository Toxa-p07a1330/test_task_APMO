import {userStore} from "../../stores/usersStore";

import {makeAutoObservable} from "mobx";
import {observer} from "mobx-react-lite";

const Users = observer(() => {
    return <div>
        {userStore.getState()}
    </div>
})


export default Users