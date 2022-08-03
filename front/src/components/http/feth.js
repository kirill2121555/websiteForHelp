import {$authHost, $host} from "./index";

export const fetchOneDevice = async (id) => {
    const {data} = await $host.get('api/getOnePointHelp/' + id)
    return data
}

export const fetchOneNeedHelp = async (id) => {
    const {data} = await $host.get('api/getOneNeedHelp/' + id)
    return data
}




export const fetchAssist = async (id) => {
    const {data} = await $host.get('api/getOneAsistant/' + id)
    return data
}



export const updatepost = async (name) => {
    const {data} = await $authHost.post('api/up',{name})
    return data
}


export const fetchOneCanHelp = async (id) => {
    const {data} = await $host.get('api/getOneAsistant/' + id)
    return data
}

export const getAllPointHelp = async () => {
    const {data} = await $authHost.get('api/getAllPointHelp')
    return data
}

export const tryremovepassvord = async (email) => {
    const dta=await $host.post('api/tryremovepassword' ,{email})
    return dta
}



export const removepassvord = async (email,password,id) => {
    const dta=await $host.post('api/removepassword' ,{email,password,id})
    return dta
}

export const deleteonepost = async (id) => {
    const dta=await $authHost.post('api/deleteneedhelp' ,{id})
    return dta
}

export const deleteasistpost = async (id) => {
    const dta=await $authHost.post('api/deleteassist' ,{id})
    return dta
}

export const getAP = async () => {
    const dta=await $authHost.get('api/getAsistPerson')
    console.log(dta)
    return (dta.data)
}
export const getNHP = async () => {
    const dta=await $authHost.get('api/getNeedHelpPerson')
    return (dta.data)
}