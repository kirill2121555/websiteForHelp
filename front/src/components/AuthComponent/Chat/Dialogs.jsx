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
console.log(posts)
    return (
        <div className="center">
            <div>
                {posts===null?
                 <h1>У вас еще нет диалогов</h1>
            :
           posts.map(dialog => <Dialog dialog={dialog} />)
            }
            </div>
        </div>
    );
};

export default Dialogs;