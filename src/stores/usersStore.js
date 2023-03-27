import {makeAutoObservable} from 'mobx';
import deepClone from "../utils/deepClone";

const BOOT_STATES = {
    NONE: "none",
    SUCCESS: "success",
    ERROR: "error",
    InPROGRESS: "inProgress"
}
class UsersStore {
    RAW_AMOUNT=10;
    _page=0;
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
    getData = ()=>{
        const clone =deepClone(this._data.users)
        const boundLeft = this.RAW_AMOUNT*this._page;
        const boundRight = this.RAW_AMOUNT*(this._page+1)-1;
        return clone.slice(boundLeft, boundRight)
    }

    getUsersFromServer = async ()=>{
        try{
            const response = await fetch('https://retoolapi.dev/eqsQ4S/users');
            const json = await response.json();
            this._data.users = json;
            this._state = BOOT_STATES.SUCCESS
        }
        catch (e){
            console.log(e)
            this._state = BOOT_STATES.ERROR
        }
    }

    incrementPage=()=>{
        if ((this._page+1) * this.RAW_AMOUNT < this._data.users.length){
            this._page++;
        }
    }
    isDecrementAvailable=()=>{
        return this._page
    }
    isIncrementAvailable=()=>{
        return (this._page+1) * this.RAW_AMOUNT < this._data.users.length
    }
    decrementPage=()=>{
        if (this._page>0)
            this._page--;
    }
}

const userStore = new UsersStore();
export {userStore, BOOT_STATES}