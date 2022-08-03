import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._user = {}
        this._nick = ''
        this._userid=''
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }
    setUser(user) {
        this._user = user
    }
    setNick(name) {
        this._nick = name
    }
    setUserId(id) {
        this._userid = id
    }


    get isAuth() {
        return this._isAuth
    }
    get user() {
        return this._user
    }
    get nick() {
        return this._nick
    }
    get id() {
        return this._userid
    }

}