import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { $authHost } from '../../http';
import g from './../../posthelper/module.css'

const AddNeedHelp = (props) => {

    const add = async (name, secondName, phone, city, listThings, description) => {
        const de = await $authHost.post('api/addNeedHelp', { name, secondName, phone, city, listThings, description })
    }

    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const [description, setDescription] = useState('')
    const [phone, setPhone] = useState('')
    const [listThings, setlistThings] = useState('')
    const [secondName, setsecondName] = useState('')

    const click = async () => {
        try {
            let data;
            data = await add(name, secondName, phone, city, listThings, description);
            window.location.reload()
        } catch (e) {
            //alert(e.response.data.message)
        }
    }

    return (
        <div className='brd'>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Мне нужно</label>
                <input type="email" class="form-control" id="exampleFormControlInput1"
                    value={name}
                    onChange={e => setName(e.target.value)}></input>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Город где вы проживаете</label>
                <input type="email" class="form-control" id="exampleFormControlInput1"
                    value={city}
                    onChange={e => setCity(e.target.value)}>
                </input>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Подробное описание что вам нужно </label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                    value={description}
                    onChange={e => setDescription(e.target.value)}>
                </textarea>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Ваше имя</label>
                <input type="email" class="form-control" id="exampleFormControlInput1"
                    value={secondName}
                    onChange={e => setsecondName(e.target.value)}>
                </input>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Ваш номер телефона</label>
                <input type="email" class="form-control" id="exampleFormControlInput1"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}>
                </input>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Адрес электороной почты</label>
                <input type="email" class="form-control" id="exampleFormControlInput1"
                    value={listThings}
                    onChange={e => setlistThings(e.target.value)}>
                </input>
            </div>
            <NavLink to={'/nha'}>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button class="btn btn-primary me-md-2" type="button" onClick={click}>Добавить</button>
                </div></NavLink>
        </div>
    );
}

export default AddNeedHelp