import React, { useContext, useEffect, useRef, useState } from 'react';
import axios from "axios";
import { Context } from '../../..';
import { NavLink } from 'react-router-dom';


const Dialog = (props) => {
    console.log(props)
    const { user } = useContext(Context)
    const [messages, setMessages] = useState([]);
    const [value, setValue] = useState('');
    const [connected, setConnected] = useState(false);
    const [username, setUsername] = useState(user.nick)


    return (
        <div className="center">
            <div>
                <div className="form">
                    {props.dialog !== null ? <div>
                        <label > Имя:{props.dialog.name}</label>
                        <br></br>
                        <label > Последнее сообщения: {props.dialog.mes}</label>
                        <br></br>
                        <NavLink to={'/chat/' + props.dialog.id}><button type="button" class="btn btn-primary">Написать</button></NavLink>
                    </div>
                        : ' '
                    }
                </div>

            </div>
        </div>
    );
};

export default Dialog;