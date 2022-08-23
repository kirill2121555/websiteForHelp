import React, { useEffect, useState } from 'react';

const Comment = (props) => {

    return (
        <div >
            <div class="card">
                <h2 class="card-header">{props.comment.usernick}  <h6><small>{props.comment.timeOfCreation.replace(/[a-zа-яё]/gi, ' ').substr(0,props.comment.timeOfCreation.length - 8)}</small></h6></h2>
                <div class="card-body">
                    <h4 class="card-title">{props.comment.text}</h4>
                </div>
            </div>
            <br></br>
        </div>
    );
   
}

export default Comment