/* eslint-disable react/prop-types */
import { useState } from "react";
import Form from "./Form";

function CommentItem({ comment, handleAddComment }) {
  const [isFormVisible, setIsformVisible] = useState(false);
  const { user, message, replies } = comment;

  return (
    <div className="my-5 flex flex-col rounded border border-gray-200 bg-white p-4 shadow">
      <div className="mt-4 flex items-center">
        <img
          src="https:placehold.co/40"
          alt="User Avatar"
          className="mr-2 rounded-full"
        />
        <div className="text-gray-700">{user}</div>
      </div>
      <div className="mt-2 text-gray-700">{message}</div>
      {/* coment section content */}
      <div className="mt-2 flex justify-end">
        <button className="rounded p-1 text-sm text-gray-500 hover:bg-gray-100">
          👍🏻{}
        </button>
        <button className="rounded p-1 text-sm text-gray-500 hover:bg-gray-100">
          👎🏻{}
        </button>
        <button
          className="ml-5 rounded p-1 text-sm text-gray-500 hover:bg-gray-100"
          onClick={() => setIsformVisible(state => !state)}
        >
          {isFormVisible ? "❌" : "Reply"}
        </button>
      </div>

      {isFormVisible && (
        <Form
          onSubmit={handleAddComment}
          setIsformVisible={setIsformVisible}
          commentId={comment.id}
        />
      )}

      {/* replies */}
      {replies.length > 0 &&
        replies.map(rep => (
          <CommentItem
            comment={rep}
            handleAddComment={handleAddComment}
            key={rep.message}
          />
        ))}
    </div>
  );
}

export default CommentItem;
