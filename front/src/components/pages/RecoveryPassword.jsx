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
      data = await tryremovepassvord(email);
    } catch (e) {
      //alert(e.response)
    }
  }




  return <header className={s.hea}>
    <div>
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
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h3 class="modal-title" id="exampleModalLabel">Провертье почту</h3>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              Провкрте почту и перейдите по ссылке
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
})

export default RecoveryPassword