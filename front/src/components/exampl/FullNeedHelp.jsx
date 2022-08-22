import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchOneNeedHelp } from './../http/feth'

const FullNeedHelp = (props) => {
    const { id } = useParams()
    const [devise, setDevise] = useState([])
    useEffect(() => {
        fetchOneNeedHelp(id).then(data => setDevise(data))
    }, [])
    return (
        <div class="card">
                <div class="card">

                    <h2 class="card-header">{devise.name}</h2>
                    <div class="card-body">
                        <h6 class="card-title">Нужно: {devise.listThings}</h6>
                        <p class="clip">{devise.description}</p>
                        <p><small>Телефое: {devise.phone} </small></p>
                        <p><small>Адрес: {devise.city}</small></p>
                    </div>
            </div>
        </div>

    );
}

export default FullNeedHelp