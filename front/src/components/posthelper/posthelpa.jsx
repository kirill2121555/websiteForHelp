import React from "react";
import s from './module.css'
import { NavLink } from "react-router-dom";

const posthelp = (props) => {

  return (<div>
    <div className="card" >
      <h2 className="card-header">{props.post.name}</h2>
      <h6 className="card-header">{props.post.description}</h6>
      <div className="card-body">
        <h6 className="card-title">Виды помощи: {props.post.listThings}</h6>
        <p className="clip">{props.post.region}</p>
        <p><small>Email: {props.post.email}</small></p>
        <p><small>Телефое: {props.post.phone} {props.post.nameBoss}  </small></p>
        <p><small>Адрес: {props.post.city} {props.post.address} </small></p>
        <NavLink to={'/gum/' + props.post._id}><button type="button" className="btn btn-primary">Подробнее</button></NavLink>
      </div>
    </div>
    <br></br>
  </div>

  )
}
export default posthelp
