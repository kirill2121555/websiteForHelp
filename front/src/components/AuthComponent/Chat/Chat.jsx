import React, { useContext, useEffect, useRef, useState } from 'react';
import axios from "axios";
import { Context } from '../../..';

const WebSock = () => {
    const { user } = useContext(Context)
    const [messages, setMessages] = useState([]);
    const [value, setValue] = useState('');
    const socket = useRef()
    const [connected, setConnected] = useState(false);
    const [username, setUsername] = useState(user.nick)
    
    useEffect(() => {
        
        socket.current = new WebSocket('ws://localhost:5001')

        socket.current.onopen = () => {
            setConnected(true)
            const message = {
                event: 'connection',
                username,
                id: Date.now()
            }
            socket.current.send(JSON.stringify(message))
        }
        socket.current.onmessage = (event) => {
            const message = JSON.parse(event.data)
            setMessages(prev => [message, ...prev])
        }
        socket.current.onclose = () => {
            console.log('Socket закрыт')
        }
        socket.current.onerror = () => {
            console.log('Socket произошла ошибка')
        }
        
    }, [])
    

    const sendMessage = async () => {
        const message = {
            username,
            message: value,
            id: Date.now(),
            event: 'message'
        }
        socket.current.send(JSON.stringify(message));
        setValue('')
    }





    return (
        <div className="center">
            <div>
                <div className="form">
                    <input value={value} onChange={e => setValue(e.target.value)} type="text" />
                    <button onClick={sendMessage}>Отправить</button>
                </div>
                <div className='ooo'>
                    <div className="messages">
                        {messages.map(mess =>
                            <div key={mess.id}>
                                {mess.event === 'connection'
                                    ? <div className="connection_message">
                                        Пользователь {mess.username} подключился
                                    </div>
                                    : <div className="message">
                                        {mess.username}. {mess.message}
                                    </div>
                                }
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebSock;