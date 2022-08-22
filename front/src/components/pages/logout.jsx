import React, { useContext } from "react";
import s from './Header.module.css'
import { Context } from "./../../index";
import { logout } from './../http/userApi'
import { observer } from "mobx-react-lite";
import { NavLink } from "react-router-dom";



const Logout = observer(() => {
    const user = useContext(Context)

    const logoutt = async () => {
        await logout();
        window.location.reload()
        user.setUser({})
        user.setIsAuth(false)

    }

    return <div>
        <header className={s.hea}>
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Вы точно хотите выйти с сайта ?</h5>
                </div>
                <div class="modal-footer">
                    <NavLink to="../"><button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={logoutt}>Выйти</button></NavLink>
                    <NavLink to="../"> <button type="button" class="btn btn-primary">Остаться на сайте</button></NavLink>
                </div>
            </div>
        </header>
        <br></br>
    </div>
})

export default Logout