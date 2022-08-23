import React from "react";
import PostHelp from "./posthelpa";
import { useState } from "react";
import { useEffect } from "react";
import { getAllPointHelp } from "../http/feth";
import PostsNeedHelp from "./postGum";
import Pagination from "../elements/Pagination";

const ListHelp = (props) => {
  const [posts, setPosts] = useState([])
  const [sort, setSort] = useState('date')
  const [textsearch, settextsearch] = useState('')
  const [indicate, Setindicate] = useState('')
  const [page, setPage] = useState(1)
  const [postOnPage] = useState(7)

  useEffect(() => {
    if (textsearch === '') {
      getAllPointHelp('', sort).then(data => setPosts(data))
      Setindicate('')
    }
    if (textsearch !== '' && sort !== '') {
      getAllPointHelp(textsearch, sort).then(data => setPosts(data))
      Setindicate('')
    }
  }, [sort, indicate])

  const postPerPage = page * postOnPage
  const firstpostIndex = postPerPage - postOnPage
  const currentPosts = posts.slice(firstpostIndex, postPerPage)
  const paginat = pageNumber => setPage(pageNumber)

  return (
    <div>
      <p>Сортировать:
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}>
          <option value='like'>По лайкам</option>
          <option value='views'>По просмотрам</option>
          <option value='date'>По дате</option>
        </select>
      </p>
      <div class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Введите данные для поиска" aria-label="Search"
          value={textsearch}
          onChange={e => settextsearch(e.target.value)}
        ></input>
        <button class="btn btn-outline-success" type="submit" onClick={() => Setindicate(true)}>Поиск</button>
      </div>
      {posts.length !== 0 ?
        <PostsNeedHelp
          posts={currentPosts}
        /> :
        <h1>Совпаденпия не найдены</h1>}
      <Pagination
        postOnPage={postOnPage}
        totalPost={posts.length}
        paginate={paginat}
      />
    </div>
  )
}

export default ListHelp