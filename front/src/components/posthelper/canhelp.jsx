import React, { useEffect, useState } from "react";
import PostCanHelp from "./postcanhelpa";
import { getAsistant } from '../http/feth';

const CanHelp = (props) => {
  const [posts, setPosts] = useState([])
  const [textsearch, settextsearch] = useState('')
  const [indicate, Setindicate] = useState('')

  useEffect(() => {
    getAsistant(textsearch).then(data => setPosts(data))
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
          {posts.map(post => <PostCanHelp post={post} />)}
        </ul>
      </div>
    </div>
  );
}
export default CanHelp