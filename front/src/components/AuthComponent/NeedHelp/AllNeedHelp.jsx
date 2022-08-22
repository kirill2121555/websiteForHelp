import React, { useEffect, useState } from 'react';
import { fetchAllNeedHElp, fetchAssist } from '../../http/feth';
import g from './../../posthelper/module.css'
import PostNeedHelp from './PostNeedHelp';


const AllNeedHelp = (props) => {
  const [posts, setPosts] = useState([])
  const [textsearch, settextsearch] = useState('')
  const [indicate, Setindicate] = useState('')

  useEffect(() => {
    fetchAllNeedHElp(textsearch).then(data => setPosts(data))
    Setindicate('')
  }, [indicate])

  console.log(posts)
  return (
    <div>
      <div class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"
          value={textsearch}
          onChange={e => settextsearch(e.target.value)}
        ></input>
        <button class="btn btn-outline-success" type="submit" onClick={() => Setindicate(true)}>Search</button>
      </div>
      <div>
        <ul>
          {posts.map(post => <PostNeedHelp post={post} />)}
        </ul>
      </div>
    </div>
  );
}
export default AllNeedHelp