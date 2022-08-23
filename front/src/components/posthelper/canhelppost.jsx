import React, { useEffect, useState } from "react";
import PostCanHelp from "./postcanhelpa";
import { getAsistant } from '../http/feth';
import Pagination from "../elements/Pagination";

const CanHelpPost = (props) => {
 




  return (
    <div>
      <div>
        <ul>
          {props.posts.map(post => <PostCanHelp post={post} />)}
        </ul>
      </div>
    </div>
  );
}
export default CanHelpPost