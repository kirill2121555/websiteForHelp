import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../AuthComponent/Comment/Comment';
import { fetchOneDevice, getCommentss, postComment } from './../http/feth'

const Post = (props) => {
     const { id } = useParams()
     const [devise, setDevise] = useState([])
     const [comment, setComment] = useState()
     const [comments, setComments] = useState()

     useEffect(() => {
          fetchOneDevice(id).then(data => setDevise(data))
          getCommentss(id).then(data => setComments(data))
     }, [])

     const addComment = async () => {
          const data = new Date()
          await postComment(id, comment, data)
          setComment('')
          window.location.reload()
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
               Оставить коммент:
               <input type="email" class="form-control" id="exampleFormControlInput1"
                    value={comment}
                    onChange={e => setComment(e.target.value)}
               ></input>
               <button class="btn btn-primary me-md-2" type="button" onClick={addComment}>Добавить коммент</button>
               <br></br>
               <br></br>
               <ul>
                    {comments?.map(comment => <Comment comment={comment} />)}
               </ul>
          </div>
     );
}

export default Post