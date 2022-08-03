import React, { useContext, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar';
import './App.css';
import AppRouter from './components/route/AppRouter';
import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '.';
import { check, getnick } from './components/http/userApi';
import { Spinner } from "react-bootstrap";


const App = observer(() => {
  const { user } = useContext(Context)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    check().then(data => {
      user.setUser(true)
      user.setIsAuth(true)
      user.setNick(data.nick)
      user.setUserId(data.id)
      
    }).finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <Spinner animation={"grow"} />
  }

  return (
    <div>
      <div className="app-wrapper">

        <Navbar />
        <AppRouter />

      </div>
    </div>
  );

}
)
export default App;
