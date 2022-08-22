import React, { useContext, useEffect, useRef, useState } from 'react';
import { Context } from '../../..';
import Dialog from './Dialog';
import { allDialogs } from '../../http/feth';


const Dialogs = () => {
    const [posts, setPosts] = useState([])
    const { user } = useContext(Context)

    useEffect(async () => {
        const data = await allDialogs()
        setPosts(data)
    }, []);

    return (
        <div className="center">
            <div>
                {posts.map(dialog => <Dialog dialog={dialog} />)}
            </div>
        </div>
    );
};

export default Dialogs;