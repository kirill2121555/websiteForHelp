import React, { useEffect, useState } from "react";
import PostNeedHelp from "./PostNeedHelp";


const PostsNeedHelp = (props) => {
  return (
    <div>
      <div>
          {props.posts.map(post => <PostNeedHelp post={post} />)}
      </div>
    </div>
  );
}
export default PostsNeedHelp