import React from "react";
import s from './module.css'
import { NavLink } from "react-router-dom";

const posthelp = (props) => {

  console.log(props.person)
  return (
    <div>
      <div class="card" >
        <h2 class="card-header">{props.person.title}</h2>
        <div class="card-body">
          <h6 class="clip">{props.person.description}</h6>
          <p><small>Имя: {props.person.name}</small></p>

          <p><small>Email: {props.person.email}</small></p>
          <p><small>Телефое: {props.person.phone} </small></p>
          <p><small>Адрес: {props.person.city} </small></p>

          {props.person.picture ?
            <div><img className="pictur" src={`http://localhost:5000/images/` + props.person.picture} alt="Изображение"></img> <br></br>
             </div> : ' '
          }


          <NavLink to={'/ch/' + props.person._id}><button type="button" class="btn btn-primary">Подробнее</button></NavLink>


        </div>
      </div><br></br></div>

  )
}
export default posthelp
