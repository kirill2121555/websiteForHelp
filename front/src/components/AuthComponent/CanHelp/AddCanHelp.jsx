import axios from "axios";
import React, { useState } from "react";
import { useCallback } from "react";
import { useRef } from "react";
import { NavLink } from 'react-router-dom';
import { $authHost, $host } from '../../http';
import g from './../../posthelper/module.css'

const AddCanHelp = (props) => {

    const add = async (email, name, city, description, phone, title,pictur) => {
        const de = await $authHost.post('api/addAsistant', { email, name, city, description, phone, title ,pictur})
    }

    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const [description, setDescription] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [title, setTitle] = useState('')
    const [img, setImg] = useState('null')
    const [avatar, setAvatar] = useState()
  
    const click = async () => {
        try {
            const data = new FormData();
            data.append('avatar', img);
            await $authHost.post('/api/upload', data, {
                headers: {
                    'content-type': 'mulpipart/form-data'
                }
            })
           .then(await add(email, name, city, description, phone, title, img.name))
           .then(window.location.reload())
        } catch (error) {
            console.log('eror')
        }
    }
  
  

    return (
        <div className='brd'>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Чем вы можете помочь</label>
                <input type="email" class="form-control" id="exampleFormControlInput1"
                    value={title}
                    onChange={e => setTitle(e.target.value)}></input>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Опишите чем вы можете помочь</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                    value={description}
                    onChange={e => setDescription(e.target.value)}>
                </textarea>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Ваше имя</label>
                <input type="email" class="form-control" id="exampleFormControlInput1"
                    value={name}
                    onChange={e => setName(e.target.value)}></input>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Ваш город</label>
                <input type="email" class="form-control" id="exampleFormControlInput1"
                    value={city}
                    onChange={e => setCity(e.target.value)}>
                </input>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Ваш телефон</label>
                <input type="email" class="form-control" id="exampleFormControlInput1"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}>
                </input>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Ваш Email</label>
                <input type="email" class="form-control" id="exampleFormControlInput1"
                    value={email}
                    onChange={e => setEmail(e.target.value)}>
                </input>
            </div>
            <div class="mb-3">
                <label for="formFile" class="form-label">Добавте фото</label>
                <input class="form-control" type="file" id="formFile" onChange={e => setImg(e.target.files[0])}></input>
            </div>
            <NavLink to={'/cha'}>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button class="btn btn-primary me-md-2" type="button" onClick={click}>Добавить</button>
                </div>
            </NavLink>
        </div>
    );
}

export default AddCanHelp