import React from "react";
import { NavLink } from "react-router-dom";
import { deleteasistpost } from "../../http/feth";
import a from './../../posthelper/module.css'

const ListAssist = (props) => {
  const deletepost = async () => {
    try {
      const a = props.person._id
      let data;
      data = await deleteasistpost(a);
      window.location.reload()
    } catch (e) {
      alert(e.response)
    }
  }

  return (
    <div>
      <div class="card" >
        <h2 class="card-header">{props.person.title}</h2>
        <div class="card-body">
          <h5 class="clip">{props.person.description}</h5>
          <p>Имя: {props.person.name}</p>
          <p><small>Телефое: {props.person.phone} </small></p>
          <p><small>Город: {props.person.city}</small></p>
          <p><small>Почта: {props.person.email}</small></p>
          <NavLink to={'/ch/' + props.person._id}><button type="button" class="btn btn-primary">Подробнее</button></NavLink>
          <NavLink to={'/chupdate/' + props.person._id}><button type="button" class="btn btn-success">Редактировать</button></NavLink>
          <button type="button" class="btn btn-danger" onClick={deletepost}>Удалить</button>
        </div>
      </div>
      <br></br>
    </div>
  )
}
export default ListAssist
