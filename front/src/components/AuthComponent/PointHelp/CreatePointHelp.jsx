import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { $authHost } from '../../http';
import { addPointhelp } from "../../http/feth";
import g from './../../posthelper/module.css'

const CreatePointHelp = (props) => {


    const [name, setName] = useState('')
    const [nameBoss, setNameBoss] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [email, setEmail] = useState('')
    const [region, setRegion] = useState('')
    const [listThings, setlistThings] = useState('')
    const [description, setDescription] = useState('')

    const click = async () => {
        try {
            let data;
            data = await addPointhelp(name, nameBoss, phone,address, city,email,region, listThings, description);
            window.location.reload()
        } catch (e) {
            alert(e.response)
        }
    }

    return (
        <div className='brd'>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Название</label>
                <input type="email" class="form-control" id="exampleFormControlInput1"
                    value={name}
                    onChange={e => setName(e.target.value)}></input>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Имя Руководитель</label>
                <input type="email" class="form-control" id="exampleFormControlInput1"
                    value={nameBoss}
                    onChange={e => setNameBoss(e.target.value)}>
                </input>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Телефон</label>
                <input class="form-control" id="exampleFormControlTextarea1" rows="3"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}>
                </input>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Адрес</label>
                <input type="email" class="form-control" id="exampleFormControlInput1"
                    value={address}
                    onChange={e => setAddress(e.target.value)}>
                </input>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Город</label>
                <input type="email" class="form-control" id="exampleFormControlInput1"
                    value={city}
                    onChange={e => setCity(e.target.value)}>
                </input>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Адрес электороной почты</label>
                <input type="email" class="form-control" id="exampleFormControlInput1"
                    value={email}
                    onChange={e => setEmail(e.target.value)}>
                </input>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Область</label>
                <input type="email" class="form-control" id="exampleFormControlInput1"
                    value={region}
                    onChange={e => setRegion(e.target.value)}>
                </input>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Чем можете помочь</label>
                <input type="email" class="form-control" id="exampleFormControlInput1"
                    value={listThings}
                    onChange={e => setlistThings(e.target.value)}>
                </input>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Напишите о своем пункте помоши</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                    value={description}
                    onChange={e => setDescription(e.target.value)}>
                </textarea>
            </div>
            <NavLink to={'/nha'}>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button class="btn btn-primary me-md-2" type="button" onClick={click}>Добавить</button>
                </div></NavLink>
        </div>
    );
}

export default CreatePointHelp