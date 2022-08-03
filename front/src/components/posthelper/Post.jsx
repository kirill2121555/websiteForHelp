import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchOneDevice } from './../http/feth'

const Post = (props) => {
     const { id } = useParams()
     const [devise, setDevise] = useState([])

     useEffect(() => {
          fetchOneDevice(id).then(data => setDevise(data))
     }, [])

     return (

          <div class="card">
               <div className="f">
                    <h2 class="card-title">{devise.name}<h6>{devise.description}</h6></h2>
                    <h6 class="card-title">Виды помощи: {devise.listThings}</h6>
                    <p class="clipp">{devise.region}</p>
                    <p><small>Email: {devise.email}</small></p>
                    <p><small>Телефое: {devise.phone} {devise.nameBoss}  </small></p>
                    <p><small>Адрес: {devise.city} {devise.address} </small></p>

               </div>
          </div>
     );
}

export default Post