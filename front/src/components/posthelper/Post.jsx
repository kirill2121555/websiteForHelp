import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../AuthComponent/Comment/Comment';
import { fetchOneDevice, getCommentss, getmark, grade, postComment } from './../http/feth'
import like from './../../img/like.png'
import dislike from './../../img/dislike.png'
import likeactiv from './../../img/likeactive.png'
import dislikeactive from './../../img/dislikeactive.png'
import s from './module.css'
import { Context } from '../..';


const Post = (props) => {
     const { id } = useParams()
     const [devise, setDevise] = useState([])
     const [comment, setComment] = useState()
     const [comments, setComments] = useState()
     const [mark, setMark] = useState('')
     const user = useContext(Context)

     useEffect(() => {
          fetchOneDevice(id).then(data => setDevise(data))
          getCommentss(id).then(data => setComments(data))
          getmark(id).then(data => setMark(data))

     }, [])
     const addComment = async () => {
          const data = new Date()
          await postComment(id, comment, data)
          setComment('')
          window.location.reload()
     }

     const marklike = async () => {
          if(user.user.isAuth){
          await grade(id, 'like')
          window.location.reload()
          }
          else(alert('Чтобы оценить пост ввойдите в свой аккаунт'))
     }
     const markdislike = async () => {
          if(user.user.isAuth){
          await grade(id, 'dislike')
          window.location.reload()
     }
          else(alert('Чтобы оценить пост ввойдите в свой аккаунт'))
     }


     return (
          <div>
               <div class="card">
                    <h2 class="card-header">{devise.name}<h6>{devise.description}</h6></h2>
                    <div class="card-body">
                         <h6 class="card-title">Виды помощи: {devise.listThings}</h6>
                         <p class="clipp">О нас:<br></br>{devise.region}</p>
                         <p><small>Email: {devise.email}</small></p>
                         <p><small>Телефое: {devise.phone} {devise.nameBoss}  </small></p>
                         <p><small>Адрес: {devise.city} {devise.address} </small></p>
                    </div>
               </div><br></br>
               <p><small>Просмотры: {devise.views}</small></p>
               <p>
                    {mark === 'like'
                         ?
                         <p> <img className='p' src={likeactiv} alt="КАРТИНКА" onClick={marklike}></img>{devise.like}
                              <img className='p' src={dislike} alt="КАРТИНКА" onClick={markdislike}></img>{devise.dislike}</p>
                         :
                         mark === 'dislike'
                              ?
                              <p>  <img className='p' src={like} alt="КАРТИНКА" onClick={marklike}></img>{devise.like}
                                   <img className='p' src={dislikeactive} alt="КАРТИНКА" onClick={markdislike}></img>{devise.dislike}</p>
                              :
                              <p> <img className='p' src={like} alt="КАРТИНКА" onClick={marklike}></img>{devise.like}
                                   <img className='p' src={dislike} alt="КАРТИНКА" onClick={markdislike}></img>{devise.dislike}</p>
                    }
               </p>
               {user.user.isAuth
                    ?
                    <div>
                         Оставить коммент:
                         <input type="email" class="form-control" id="exampleFormControlInput1"
                              value={comment}
                              onChange={e => setComment(e.target.value)}
                         ></input>
                         <button class="btn btn-primary me-md-2" type="button" onClick={addComment}>Добавить коммент</button>
                         <br></br>
                         <br></br>
                    </div>
                    :
                    ' '
               }              
                    {comments?.map(comment => <Comment comment={comment} />)}
          </div>
     );
}

export default Post