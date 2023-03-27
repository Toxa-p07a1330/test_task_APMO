import {makeAutoObservable} from 'mobx';
import deepClone from "../utils/deepClone";
import generateId from "../utils/generateId";

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
    _state = BOOT_STATES.NONE;
    _filter = {}


    constructor() {
        this._state = BOOT_STATES.NONE
        this.getUsersFromServer();
        makeAutoObservable(this)
    }

    getState = ()=>{
        return deepClone(this._state)
    }
    getData = ()=> {
        const clone = deepClone(this._data.users)
        const boundLeft = this.RAW_AMOUNT * this._page;
        const boundRight = this.RAW_AMOUNT * (this._page + 1) - 1;
        let slicedData = clone.slice(boundLeft, boundRight);
        slicedData = slicedData.filter((row) => {
            let show = true;
            const keys = Object.keys(row);
            keys.forEach(key => {

                if (this._filter[key] !== undefined) {
                    let filter = deepClone(this._filter[key].map(filter => filter.value))
                    const value = row[key]
                    show = filter.includes(value)
                }
            })
            return show
        })
        return slicedData
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
    isDecrementAvailable = () => {
        return this._page
    }
    isIncrementAvailable = () => {
        return (this._page + 1) * this.RAW_AMOUNT < this._data.users.length
    }
    decrementPage = () => {
        if (this._page > 0)
            this._page--;
    }
    addUser = (newUser) => {
        let id = generateId();
        while (this._data.users.find(v => {
            return v.id === id
        })) {
            id = generateId();
        }
        newUser.id = id;
        this._data.users.push(newUser)
        console.log(newUser)
    }
    deleteUser = (id) => {
        const sure = window.confirm("Are you sure?")
        if (sure)
            this._data.users = this._data.users.filter(user => user.id !== id)
    }
    editUser = (user) => {
        this._data.users = this._data.users.filter(_user => _user.id !== user.id);
        this._data.users.push(user)
    }
    filterHandler = (e, category) => {
        this._filter[category] = e
        console.log(this._filter)
    }
    filteringOptions = () => {
        const idList = this._data.users.map((v) => v.id)
        const availableList = [true, false];
        const nameList = this._data.users.map((v) => v.name)
        const lastNameList = this._data.users.map((v) => v.lastName)
        const emailList = this._data.users.map((v) => v.email)
        const birthDate = this._data.users.map((v) => v.birthDate)

        const filteringOptions = {
            idList: idList,
            availableList: availableList,
            nameList: nameList,
            lastNameList: lastNameList,
            emailList: emailList,
            birthDate: birthDate
        }
        Object.keys(filteringOptions).forEach((v)=>{
            filteringOptions[v] = Array.from(new Set(filteringOptions[v]))
            filteringOptions[v] = filteringOptions[v].map(v=>{
                return {
                    label: v+"",
                    value: v
                }
            })
        })
        return filteringOptions;

    }
}

const userStore = new UsersStore();
export {userStore, BOOT_STATES}