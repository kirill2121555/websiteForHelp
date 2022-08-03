

import React, { useContext } from "react";
import s from './Header.module.css'
import { observer } from "mobx-react-lite";
import Login from "./login";

const Loginafterregistration = observer(() => {
    return <header className={s.header}>
        <div>
            <h1>Акаунт активирован! Войдите</h1>
            <Login />
        </div>
    </header>
})

export default Loginafterregistration