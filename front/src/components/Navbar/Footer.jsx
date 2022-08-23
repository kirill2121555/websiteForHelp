import React, { useEffect, useState } from 'react';
import a from './../exampl/Header.module.css'
import s from './Navbar.module.css'

import tg from './../../img/tggg.png'
import email from './../../img/email.png'
import gh from './../../img/gh.png'
import { NavLink } from 'react-router-dom';


const Footer = (props) => {
  return (
    <div >
      <div >


        <p>
          Написать Автору: 
          <a href='https://t.me/kirill212121555'><img className={s.pi} src={tg} alt="КАРТИНКА"></img></a>
          <a href='mailto:kirill2121555@gmail.com?'><img className={s.pie} src={email} alt="КАРТИНКА"></img></a>
          <a href='https://github.com/kirill2121555'><img className={s.pie} src={gh} alt="КАРТИНКА"></img></a>
          <a> <NavLink to={'/rfaph'}>Хочу добавить свой пункт гум пощи</NavLink></a>

          </p>


          </div>

      </div>




      );
}

      export default Footer