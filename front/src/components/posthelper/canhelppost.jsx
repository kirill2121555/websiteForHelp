import React, { useEffect, useState } from "react";
import PostCanHelp from "./postcanhelpa";
import { getAsistant } from '../http/feth';
import Pagination from "../elements/Pagination";

const CanHelpPost = (props) => {
  return (
    <div>
      <div>
          {props.posts.map(post => <PostCanHelp post={post} />)}
      </div>
    </div>
  );
}
export default CanHelpPost