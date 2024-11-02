import { useState } from "react";
import useNode from "../hooks/useNode";

import ProductDetails from "./ProductDetails";
import CommentList from "./CommentList";

const FETCHED_COMMENTS = { id: 1, replies: [] };

function Product() {
  const [comments, setComments] = useState(FETCHED_COMMENTS);

  const { insertNode } = useNode();

  const handleAddComment = (commentId, user, message) => {
    const finalStructure = insertNode(comments, commentId, { user, message });
    console.log(finalStructure);
    setComments(finalStructure);
  };

  return (
    <>
      <ProductDetails />
      <CommentList comments={comments} handleAddComment={handleAddComment} />
    </>
  );
}

export default Product;
