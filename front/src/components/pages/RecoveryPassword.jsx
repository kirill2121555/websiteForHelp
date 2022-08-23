import React, { useState, useContext } from "react";
import s from './Header.module.css'
import { Context } from "./../../index";
import { observer } from "mobx-react-lite";
import { tryremovepassvord } from "../http/feth";



const RecoveryPassword = observer(() => {
  const user = useContext(Context)
  const [email, setEmail] = useState('')

  const click = async () => {
    try {
      let data;
      alert('Перейлите на почту и подтвердите аккаунт')

      data = await tryremovepassvord(email);
    } catch (e) {
      //alert(e.response)
    }
  }




  return <header className={s.hea}>
    <div className={s.page}>
      <div className="message">
        <form>
          <div class="mb-3">
            <h3> <label for="exampleInputPassword1" class="form-label">Введите ваш email</label></h3>
            <input class="form-control" id="exampleInputPassword1"
              value={email}
              onChange={e => setEmail(e.target.value)}
            ></input>
          </div>
        </form>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={click}>Востановить пароль</button>

      </div>
    </div>
  </header>
})

export default RecoveryPassword