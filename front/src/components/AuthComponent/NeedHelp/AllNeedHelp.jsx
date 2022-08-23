import React, { useEffect, useState } from 'react';
import Pagination from '../../elements/Pagination';
import { fetchAllNeedHElp, fetchAssist } from '../../http/feth';
import g from './../../posthelper/module.css'
import PostsNeedHelp from './PostsNeedHelp';

const AllNeedHelp = (props) => {
  const [posts, setPosts] = useState([])
  const [textsearch, settextsearch] = useState('')
  const [indicate, Setindicate] = useState('')
  const [page, setPage] = useState(1)
  const [postOnPage] = useState(7)

  useEffect(() => {
    fetchAllNeedHElp(textsearch).then(data => setPosts(data))
    Setindicate('')
  }, [indicate])

  const postPerPage = page * postOnPage
  const firstpostIndex = postPerPage - postOnPage
  const currentPosts = posts.slice(firstpostIndex, postPerPage)
  const paginat = pageNumber => setPage(pageNumber)

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
        {posts.length !== 0
          ?
          <div>
            <PostsNeedHelp
              posts={currentPosts}
            />
            <Pagination
              postOnPage={postOnPage}
              totalPost={posts.length}
              paginate={paginat}
            />
          </div>
          :
          <h1>Совпаденпия не найдены</h1>
        }
      </div>
    </div>
  );
}
export default AllNeedHelp