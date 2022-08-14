

import React, { useState, useContext } from "react";
import s from './Header.module.css'
import { Context } from "./../../index";
import { check, getnick, getRoleuser, login } from './../http/userApi'
import { NavLink, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";



const Login = observer(() => {
  const user = useContext(Context)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();


  const click = async () => {
    try {
      let data;      

      data = await login(email, password);
      data = await check()
      navigate("/gum");
      window.location.reload()

     // user.setUser(user)
   //   user.setIsAuth(true)
        } catch (e) {
      console.log(e)
    } 
  }

  return <div className={s.page}>
  
  <div className={s.head}>
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Ведите email</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
          value={email}
          onChange={e => setEmail(e.target.value)}
        ></input>
       
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Ведите пароль</label>
        <input type="password" class="form-control" id="exampleInputPassword1"
          value={password}
          onChange={e => setPassword(e.target.value)}
        ></input>
      </div>


    </form>
    <button type="submit" class="btn btn-primary" onClick={click}>Войти</button>

    <a href="recoveryPassword">Забыли пароль?</a>
    <br></br>
    Ещё нет аккаунта?<a href="registration">Зарегистрируйтесь</a>
  </div>

</div>
})

export default Login