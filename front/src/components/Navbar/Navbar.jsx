import React, { useState } from "react";
import s from './Navbar.module.css'
import { NavLink, useParams } from 'react-router-dom'
import { useContext } from "react";
import { Context } from "../..";
import { observer } from "mobx-react-lite";
import logo from './../../img/Logo.png'


const Navbar = observer(() => {

  const user = useContext(Context)

  return <nav className={s.nav}>
    {user.user.isAuth ? (
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown"> 
          <img  className={s.pi} src={logo} alt="Logo"></img>
            <ul class="navbar-nav">
           
              <li class="nav-item">
                <b><NavLink to="gum" className='nav-link'>Пункты Гум Помощи</NavLink></b>
              </li>
              <li class="nav-item">
                <b> <NavLink to="cha" className='nav-link'>Могу помочь</NavLink></b>
              </li>
              <li class="nav-item">
                <b><NavLink to="nha" className='nav-link'>Нужна помошь</NavLink></b>
              </li>
              <li class="nav-item">
                <b><NavLink to="chat" className='nav-link'>Чат</NavLink></b>
              </li>
              <li class="nav-item">
                <b><NavLink to="profil" className='nav-link'>Профиль</NavLink></b>
              </li>
              <li class="nav-item ">
                <b><NavLink to="logout" className="nav-link">Выйти</NavLink></b>
              </li>
            </ul>

          </div>
        </div>
      </nav>) :
      (<nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <NavLink to="gum"><img  className={s.pi} src={logo} alt="Logo"></img></NavLink>
            <ul class="navbar-nav">
              <li class="nav-item">
                <b><NavLink to="gum" className='nav-link'>Пункты Гум Помощи</NavLink></b>
              </li>
              <li class="nav-item">
                <b> <NavLink to="ch" className='nav-link'>Могу помочь</NavLink></b>
              </li>
              <li class="nav-item">
                <b><NavLink to="nh" className='nav-link'>Нужна помошь</NavLink></b>
              </li>
              <li class="nav-item ">
                <b><NavLink to="login" className="nav-link">Войти</NavLink></b>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      )

    }
  </nav>
})


export default Navbar;