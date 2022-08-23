import React, { useEffect, useState } from "react";
import PostHelp from "./posthelpa";


const PostsNeedHelp = (props) => {


    return (
        <div>
            <ul>
                    {props.posts.map(post => <PostHelp post={post} />) }
                
            </ul>

        </div>
    );
}
export default PostsNeedHelp