import { makeAutoObservable } from 'mobx';

const BOOT_STATES = {
    NONE: "none",
    SUCCESS: "success",
    ERROR: "error",
    InPROGRESS: "inProgress"
}
class UsersStore {
    _data={
        users: []
    };
    _state=BOOT_STATES.NONE;

    constructor() {
        this._data={
            users: []
        };
        this._state = BOOT_STATES.NONE
        makeAutoObservable(this);
    }
}

const userStore = new UsersStore();
export {userStore, BOOT_STATES}