import React from "react";
import s from './module.css'
import { NavLink } from "react-router-dom";

const posthelp = (props) => {

  return (<div>
    <div className="card" >
      <h2 className="card-header">{props.person.name}</h2>
      <h6 className="card-header">{props.person.description}</h6>
      <div className="card-body">
        <h6 className="card-title">Виды помощи: {props.person.listThings}</h6>
        <p className="clip">{props.person.region}</p>
        <p><small>Email: {props.person.email}</small></p>
        <p><small>Телефое: {props.person.phone} {props.person.nameBoss}  </small></p>
        <p><small>Адрес: {props.person.city} {props.person.address} </small></p>

        <NavLink to={'/gum/' + props.person._id}><button type="button" className="btn btn-primary">Подробнее</button></NavLink>
      </div>
    </div>   <br></br></div>

  )
}
export default posthelp
