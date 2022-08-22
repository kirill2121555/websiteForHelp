import { $authHost, $host } from "./index";

export const fetchOneDevice = async (id) => {
    const { data } = await $host.get('api/getOnePointHelp/' + id)
    return data
}

export const fetchOneNeedHelp = async (id) => {
    const { data } = await $host.get('api/getOneNeedHelp/' + id)
    return data
}
export const getDialog = async (id) => {
    const { data } = await $authHost.get(`api/getDialog?companion=${id}`)
    return data
}

export const allDialogs = async () => {
    const { data } = await $authHost.get(`api/allDialogs`)
    return data
}

export const fetchAllNeedHElp = async (text) => {
    const { data } = await $host.get(`api/getAllNeedHelp?text=${text}`)
    return data
}



export const getAsistant = async (text) => {
    const { data } = await $host.get(`api/getAsistant?text=${text}`)
    return data
}


export const fetchAssist = async (id) => {
    const { data } = await $host.get('api/getOneAsistant/' + id)
    return data
}





export const updatepost = async (name) => {
    const { data } = await $authHost.post('api/up', { name })
    return data
}


export const fetchOneCanHelp = async (id) => {
    const { data } = await $host.get('api/getOneAsistant/' + id)
    return data
}

export const getAllPointHelp = async (text,sort) => {
    const { data } = await $host.get(`api/getAllPointHelp?text=${text}&sort=${sort}`)
    return data
}


export const tryremovepassvord = async (email) => {
    const dta = await $host.post('api/tryremovepassword', { email })
    return dta
}



export const removepassvord = async (email, password, id) => {
    const dta = await $host.post('api/removepassword', { email, password, id })
    return dta
}

export const deleteonepost = async (id) => {
    const dta = await $authHost.post('api/deleteneedhelp', { id })
    return dta
}

export const deleteasistpost = async (id) => {
    const dta = await $authHost.post('api/deleteassist', { id })
    return dta
}

export const getAP = async () => {
    const dta = await $authHost.get('api/getAsistPerson')
    return (dta.data)
}
export const getNHP = async () => {
    const dta = await $authHost.get('api/getNeedHelpPerson')
    return (dta.data)
}


export const postComment = async (id, text, timeCreate) => {
    const data = await $authHost.post('api/addComment/' + id, { text, timeCreate })
    return (data)
}
export const getCommentss = async (id) => {
    const data = await $host.get('api/getComment/' + id)
    return (data.data)
}

export const addPointhelp = async (name, nameBoss, phone, address, city, email, region, listThings, description) => {
    const data = await $authHost.post('api/addPointHelp', { name, nameBoss, phone, address, city, email, region, listThings, description })
    return (data)
}
export const requesetaddPointhelp = async (name, nameBoss, phone, address, city, email, region, listThings, description) => {
    const { data } = await $authHost.post('api/requesetaddPointHelp', { name, nameBoss, phone, address, city, email, region, listThings, description })
    console.log(data)
    return data
}

export const grade = async (id, mark) => {
    const { data } = await $authHost.post('api/grade/' + id, { mark })
    return data
}

export const getmark = async (id, mark) => {
    const { data } = await $authHost.post('api/getmark/' + id)
    return data
}

