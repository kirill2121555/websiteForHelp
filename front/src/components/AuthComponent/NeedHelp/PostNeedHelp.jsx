import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchAllNeedHElp, fetchAssist } from '../../http/feth';
import g from './../../posthelper/module.css'


const PostNeedHelp = (props) => {

    console.log(props.post)
    return (
        <div>
            <div>
                <div class="card">
                    <h2 class="card-header">{props.post.name}</h2>
                    

                        <div class="card-body">
                            <h6 class="card-title">Нужно: {props.post.description}</h6>
                            <p class="clip">Email: {props.post.listThings}</p>
                            <p><small>Имя: {props.post.secondName} </small></p>
                            <p><small>Телефое: {props.post.phone} </small></p>
                            <p><small>Адрес: {props.post.city}</small></p>
                            <NavLink to={'/nh/' + props.post._id}><button type="button" class="btn btn-primary">Подробнее</button></NavLink>

                        
                    </div>

                </div>
            </div><br></br>
        </div>
    );
}
export default PostNeedHelp