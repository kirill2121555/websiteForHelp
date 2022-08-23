import React, { useEffect, useState } from 'react';
import Dialog from './Dialog';
import { allDialogs } from '../../http/feth';


const Dialogs = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        //const data = await allDialogs()
        allDialogs().then(data=> setPosts(data))
      //  setPosts(data)
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