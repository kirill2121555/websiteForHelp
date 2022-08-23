import React, { useState, useContext } from "react";
import s from './Header.module.css'
import { Context } from "./../../index";
import { registration } from './../http/userApi'
import { observer } from "mobx-react-lite";


const Registration = observer(() => {
  const user = useContext(Context)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [nick, setNick] = useState('')


  const click = async () => {
    try {
      let data;
      data = await registration(email, password, nick);
      console.log(data)
      alert('Перейлите на почту и подтвердите аккаунт')
      window.location.reload()
    } catch (e) {
      alert(e.response)
    }

  }

  return <div className="center">
    <div className={s.page}>

      <div className={s.head}>

        <div className='message'>

          <div>
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Ведите ваше имя</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                  value={nick}
                  onChange={e => setNick(e.target.value)}
                ></input>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Ведите Email</label>
                <input type="email" class="form-control" id="exampleInputPassword1"
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
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={click}>Зарегистрироваться</button>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Подтверлите почту</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    Перейлите на почту и подтвердите аккаунт
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>


})

export default Registration