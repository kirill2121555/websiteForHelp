import React from "react";
import s from './module.css'
import { NavLink } from "react-router-dom";

const posthelp = (props) => {

  return (
    <div>
      <div class="card" >
        <h2 class="card-header">{props.post.title}</h2>
        <div class="card-body">
          <h6 class="clip">{props.post.description}</h6>
          <p><small>Имя: {props.post.name}</small></p>

          <p><small>Email: {props.post.email}</small></p>
          <p><small>Телефое: {props.post.phone} </small></p>
          <p><small>Адрес: {props.post.city} </small></p>

          {props.post.picture ?
            <div><img className="pictur" src={`http://localhost:5000/images/` + props.post.picture} alt="Изображение"></img> <br></br>
             </div> : ' '
          }


          <NavLink to={'/ch/' + props.post._id}><button type="button" class="btn btn-primary">Подробнее</button></NavLink>


        </div>
      </div><br></br></div>

  )
}
export default posthelp
