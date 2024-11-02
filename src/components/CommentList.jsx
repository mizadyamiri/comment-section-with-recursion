/* eslint-disable react/prop-types */
import CommentItem from "./CommentItem";
import Form from "./Form";

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

      <Form
        onSubmit={handleAddComment}
        commentId={comments.id}
        setIsformVisible={() => {}}
      />
    </div>
  );
}

export default CommentList;
