


import React, { useState, useContext } from "react";
import s from './Header.module.css'
import { Context } from "./../../index";
import { NavLink, useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { removepassvord } from "../http/feth";

const RemovePassword = observer(() => {
    const user = useContext(Context)
    const { id } = useParams()
    console.log(id)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data;
            data = await removepassvord(email, password, id);
        } catch (e) {
            alert(e.response)
        }
    }

    return <header className={s.header}>
        <div>
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    ></input>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    ></input>
                </div>
            </form>
            <NavLink to='/login'> <button onClick={click}>Востановить пароль</button></NavLink>
        </div>
    </header>
})

export default RemovePassword