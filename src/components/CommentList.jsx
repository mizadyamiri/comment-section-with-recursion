/* eslint-disable react/prop-types */
import CommentItem from "./CommentItem";

function CommentList({ comments, handleAddComment }) {
  return (
    <div className="m-4">
      <div className="text-lg font-semibold text-gray-700">
        Comments({comments.replies.length})
      </div>

      {comments.replies.map(comment => (
        <CommentItem
          comment={comment}
          handleAddComment={handleAddComment}
          key={comment.message}
        />
      ))}
    </div>
  );
}

export default CommentList;
