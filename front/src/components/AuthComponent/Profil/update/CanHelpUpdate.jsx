import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { $authHost } from '../../../http';
import { fetchAssist} from '../../../http/feth';


const CanHelpUpdate = (props) => {

    const { id } = useParams()
    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const [description, setDescription] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [title, setTitle] = useState('')

    useEffect(() => {
        fetchAssist(id).then(
            data => {
                setName(data.name)
                setCity(data.city)
                setDescription(data.description)
                setPhone(data.phone)
                setEmail(data.email)
                setTitle(data.title)
            })
    }, [])

    const add = async () => {
        const de = await $authHost.post('api/updateOneAsistant/' + id, { name, phone, description, city, email,title })
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
            <NavLink to={'/nha'}>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button class="btn btn-primary me-md-2" type="button" onClick={add}>Сохранить</button>
                </div></NavLink>
        </div>
    );
}
export default CanHelpUpdate