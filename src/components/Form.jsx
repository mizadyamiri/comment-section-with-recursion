import { useState } from "react";

/* eslint-disable react/prop-types */
function Form({ onSubmit, setIsformVisible, commentId }) {
  const [user, setUser] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!user || !message) return;

    onSubmit(commentId, user, message);
    setIsformVisible(false);
    setMessage("");
    setUser("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={user}
        onChange={e => setUser(e.target.value)}
        className="my-2 w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring"
        placeholder="Add your Name..."
      />
      <input
        type="text"
        value={message}
        onChange={e => setMessage(e.target.value)}
        className="my-2 w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring"
        placeholder="Add a comment..."
      />
      <button className="my-2 h-full w-full rounded-xl bg-green-500 px-16 py-3 font-semibold text-white">
        sumbit
      </button>
    </form>
  );
}

export default Form;
