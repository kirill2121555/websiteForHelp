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

return <header className={s.header}>
        <div>
            <div class="d-grid gap-2 d-md-block">
                <NavLink to="../main"><button class="btn btn-primary" type="button" onClick={logoutt}>Выйти</button></NavLink>
            </div>
        </div>
    </header>
})

export default Logout