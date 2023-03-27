import {makeAutoObservable} from 'mobx';
import deepClone from "../utils/deepClone";

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
        this._state = BOOT_STATES.NONE
        this.getUsersFromServer();
        makeAutoObservable(this)
    }

    getState = ()=>{
        return deepClone(this._state)
    }

    getUsersFromServer = async ()=>{
        try{
            const response = await fetch('https://retoolapi.dev/eqsQ4S/users');
            const json = await response.json();
            this._data.users = json;
            this._state = BOOT_STATES.SUCCESS
            console.log(this._state)
        }
        catch (e){
            console.log(e)
            this._state = BOOT_STATES.ERROR
        }
    }
}

const userStore = new UsersStore();
export {userStore, BOOT_STATES}