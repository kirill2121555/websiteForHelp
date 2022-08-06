import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import ListAssist from "./ListAssist";
import ListNeedhelp from "./ListNeedhelp";
import { Spinner } from "react-bootstrap";
import { useEffect } from "react";
import { getAP, getNHP } from "../../http/feth";
import { observer } from "mobx-react-lite";
import { Context } from "../../..";
import Footer from "../../Navbar/Footer";


const Profil = observer(() => {
    const { user } = useContext(Context)

    const [loading, setLoading] = useState(true)
    const [persons, setPersons] = useState([])
    const [nhs, setnhs] = useState([])

    useEffect(() => {
        getAP().then(
            data => {
                setPersons(data)
            })
        getNHP().then(
            data => {
                setnhs(data)
                setLoading(false)
            }
        )
    }, [])


    if (loading) {
        return <Spinner animation={"grow"} />
    }
    console.log(user.role)
    return (


       
            
              
            
    
        <div>
            <br></br><div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <NavLink to={'/addcanhelp'}><button class="btn btn-primary" type="button">Добавить пост в категории "Могу помочь"</button></NavLink>
                <NavLink to={'/addneedhelp'}><button class="btn btn-primary" type="button">Добавить пост в категории "Нужна помошь"</button></NavLink>
            </div>
            {user.role === 'MODERATOR' ?
                <div>
                    <NavLink to={'/addpointhelp'}><button class="btn btn-primary" type="button">Добавить пост в категории "Пункт помощи"</button></NavLink>
                </div>
                : ' '}
            <div>
                {persons.length != 0 ? <h3>Ваши посты в категории "Могу помочь"</h3> : <h1>У вас нет постов в категории "Могу помочь"</h1>}
                <ul>
                    {persons.length == 0 ?
                        ''
                        :
                        (persons.map(person => <ListAssist person={person} />))
                    }
                </ul>
            </div>

            <div>
                {nhs.length != 0 ? <h3>Ваши посты в категории "Нужна помошь"</h3> : <h1>У вас нет постов в категории "Нужна помочь"</h1>}
                <ul>
                    {nhs == 0 ?
                        ' '
                        :
                        (nhs.map(nh => <ListNeedhelp nh={nh} />))
                    }
                </ul>
            </div>

        </div>



    )
}
)

export default Profil