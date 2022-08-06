import React, { useEffect, useState } from 'react';
import { fetchAllNeedHElp, fetchAssist } from '../../http/feth';
import g from './../../posthelper/module.css'
import PostNeedHelp from './PostNeedHelp';

     
const AllNeedHelp=(props)=>{
const [posts, setPosts]=useState([])
    useEffect(() => {
        fetchAllNeedHElp().then(data => setPosts(data))
    }, [])

console.log(posts)
        return (
                <div>
                      <ul>

                        {posts.map(post=><PostNeedHelp post={post}/>)}
                      </ul>
                </div>
                );
}
export default AllNeedHelp