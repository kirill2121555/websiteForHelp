import React, { useEffect, useState } from "react";
import PostCanHelp from "./postcanhelpa";
import { getAsistant } from '../http/feth';
import Pagination from "../elements/Pagination";
import CanHelpPost from "./canhelppost";

const CanHelp = (props) => {
  const [posts, setPosts] = useState([])
  const [textsearch, settextsearch] = useState('')
  const [indicate, Setindicate] = useState('')
  const [page, setPage] = useState(1)
  const [postOnPage] = useState(7)

  useEffect(() => {
    getAsistant(textsearch).then(data => setPosts(data))
    Setindicate('')

  }, [indicate])


  const postPerPage = page * postOnPage
  const firstpostIndex = postPerPage - postOnPage
  const currentPosts = posts.slice(firstpostIndex, postPerPage)

  const paginat = pageNumber => setPage(pageNumber)

  console.log(postOnPage)
  return (
    <div>
      <div class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Введите данные для поиска" aria-label="Search"
          value={textsearch}
          onChange={e => settextsearch(e.target.value)}
        ></input>
        <button class="btn btn-outline-success" type="submit" onClick={() => Setindicate(true)}>Поиск</button>
      </div>
      <div>
        {posts.length!==0?
        <div> <CanHelpPost
          posts={currentPosts}
        />
        <Pagination
          postOnPage={postOnPage}
          totalPost={posts.length}
          paginate={paginat}
        /></div>:<h1>Ничего не найдено</h1>}
      </div>
    </div>
  );
}
export default CanHelp