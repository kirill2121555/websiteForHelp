import React, { useEffect, useState } from "react";
import PostHelp from "./posthelpa";


const PostsNeedHelp = (props) => {
    return (
        <div>
            {props.posts.map(post => <PostHelp post={post} />)}
        </div>
    );
}
export default PostsNeedHelp