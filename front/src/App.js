import React, { useContext, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar';
import './App.css';
import AppRouter from './components/route/AppRouter';
import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '.';
import { check, getnick } from './components/http/userApi';
import { Spinner } from "react-bootstrap";
import Footer from './components/Navbar/Footer';

const App = observer(() => {
  const { user } = useContext(Context)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    check().then(data => {
      user.setUser(true)
      user.setIsAuth(true)
      user.setNick(data.nick)
      user.setUserId(data.id)
      user.setRole(data.role)
    }).finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <Spinner animation={"grow"} />
  }

  return (
      <div className="app-wrapper">

        <Navbar />
        <div className='height'> <AppRouter className='height'/></div>
        <Footer/>

      </div>
  );

}
)
export default App;
