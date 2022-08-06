import Error from './../Error/error'
import React from 'react'
import { Route , Routes, Navigate} from 'react-router-dom';
import { useContext } from 'react'
import { Context } from '../..'
import { authRoutes, publicRoutes } from './route'
import { observer } from 'mobx-react-lite'





const AppRouter= observer(()=>{
    let a=true
const{user}=useContext(Context)
   if(user.isAuth==false){
    a= false
   }

return(
        <Routes> 
            {(user.isAuth) && authRoutes.map(({path, Element}) =>
                <Route key={path} path={path} element={Element} exact/>
                )}

            {publicRoutes.map(({path, Element}) =>
                <Route key={path} path={path} element={Element} exact/>
            )}




        <Route
                            path="*"
                            element={<Error to="/Error" />}
                        />
        </Routes>

    )})



export default AppRouter