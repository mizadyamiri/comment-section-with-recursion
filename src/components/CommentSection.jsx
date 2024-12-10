import { useState } from "react";
import useNode from "../utils/useNode";

import CommentList from "./CommentList";
import Form from "./Form";

const FETCHED_COMMENTS = { id: 1, replies: [] };

function CommentSection() {
  const [comments, setComments] = useState(FETCHED_COMMENTS);

  const { insertNode } = useNode();

  const handleAddComment = (commentId, user, message) => {
    const finalStructure = insertNode(comments, commentId, { user, message });
    console.log(finalStructure);
    setComments(finalStructure);
  };

  return (
    <>
      <CommentList comments={comments} handleAddComment={handleAddComment} />
      <Form
        onSubmit={handleAddComment}
        commentId={comments.id}
        setIsformVisible={() => {}}
      />
    </>
  );
}

export default CommentSection;
