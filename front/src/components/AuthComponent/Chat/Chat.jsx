import React, { useContext, useEffect, useRef, useState } from 'react';
import { Context } from '../../..';
import { io } from "socket.io-client";
import { useParams } from 'react-router-dom';
import { getDialog } from '../../http/feth';

import socket from './socket';




const Chat = () => {
    const { id } = useParams()
    const { user } = useContext(Context)
    const [messages, setMessages] = useState([]);
    const [value, setValue] = useState('');
    const [connected, setConnected] = useState(false);
    const [username, setUsername] = useState(user.nick)
    useEffect(() => {
       getDialog(id).then(data=>setMessages(data))

        socket.on('message', function (data) {
            const message = JSON.parse(data)
            setMessages(prev => [message, ...prev])
        });

    }, []);

    const s = () => {
        socket.emit('message',
            {
                message: value,
                username: user.nick,
                to: id,
                i: user.id
            }
        )
        setValue('')
    }




    return (
        <div className="center">
            <div>
                <div className="form">
                    <input value={value} onChange={e => setValue(e.target.value)} type="text" />
                    <button onClick={s}>Отправить</button>

                </div>
                <div className='ooo'>
                    <div >
                        {messages.map(mess =>
                            <div key={mess.id}>
                                <div className="message">
                                    {mess.username}. {mess.message}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;









