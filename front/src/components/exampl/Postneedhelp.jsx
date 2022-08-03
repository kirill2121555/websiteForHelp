import React from "react";
import { NavLink } from "react-router-dom";

const postneedhelp = (props) => {

  return (
    <div>
      <div class="card" >
        <h2 class="card-header">{props.person.name}</h2>
        <div class="card-body">
          <h6 class="card-title">Нужно: {props.person.listThings}</h6>
          <p class="clip">{props.person.description}</p>
          <p><small>Телефон: {props.person.phone} </small></p>
          <p><small>Адрес: {props.person.city}</small></p>
          <NavLink to={'/nh/' + props.person._id}><button type="button" class="btn btn-primary">Подробнее</button></NavLink>
        </div>
      </div><br></br></div>
  )
}
export default postneedhelp
