import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (email, password,nick) => {
    const {data} = await $host.post('api/registration', {email, password, nick,role: 'ADMIN'})

}

export const login = async (email, password) => {
    const {data}= await $host.post('api/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('api/auth' )
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const logout = async () => {
    console.log(localStorage)
    localStorage.removeItem('token');
}

export const getnick = async () => {
    const data = await $authHost.get('api/getnick' )
    return data
}