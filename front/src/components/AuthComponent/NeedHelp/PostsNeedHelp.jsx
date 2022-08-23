import React, { useEffect, useState } from "react";
import PostNeedHelp from "./PostNeedHelp";


const PostsNeedHelp = (props) => {
 

  return (
    <div>
      <div>
        <ul>
          {props.posts.map(post => <PostNeedHelp post={post} />)}
        </ul>
      </div>
    </div>
  );
}
export default PostsNeedHelp