import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { Context } from '../..';
import { fetchAssist } from './../http/feth'
import g from './module.css'

const FullCanHelp = (props) => {
    const user = useContext(Context)

    const { id } = useParams()
    const [devise, setDevise] = useState([])

    useEffect(() => {
        fetchAssist(id).then(data => setDevise(data))
    }, [])

    return (
        <div >
            <div class="card">
                <div >
                    <div class="card" >
                        <h2 class="card-header">{devise.title}</h2>
                        <div class="card-body">
                            <h6 class="card-title">{devise.description}</h6>
                            <p><small>Имя: {devise.name}</small></p>
                            <p><small>Email: {devise.email}</small></p>
                            <p><small>Телефое: {devise.phone} </small></p>
                            <p><small>Адрес: {devise.city} </small></p>
                            {devise.picture ?
                                <div><img className="picturfull" src={`http://localhost:5000/images/` + devise.picture} alt="КАРТИНКА"></img>
                                </div> : ' '
                            }
                            {user.user.isAuth ? (
                                <NavLink to={'/chat/' + devise.autorid}><button type="button" class="btn btn-primary">Написать</button></NavLink>
                            ) :
                                <button type="button" class="btn btn-primary">Чтобы написать пользователю нужно заригистирироваться</button>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FullCanHelp