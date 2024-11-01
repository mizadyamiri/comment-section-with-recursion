function CommentItem() {
  return (
    <div className="my-5 flex flex-col rounded border border-gray-200 bg-white p-4 shadow">
      <div className="mt-4 flex items-center">
        <img
          src="https:placehold.co/40"
          alt="User Avatar"
          className="mr-2 rounded-full"
        />
        <div className="text-gray-700">User Name</div>
      </div>
      <div className="mt-2 text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus iste
        velit, et eaque reprehenderit ?
      </div>
      {/* coment section content */}
      <div className="mt-2 flex justify-end">
        <button className="rounded p-1 text-sm text-gray-500 hover:bg-gray-100">
          👍🏻
        </button>
        <button className="rounded p-1 text-sm text-gray-500 hover:bg-gray-100">
          👎🏻
        </button>
        <button className="rounded p-1 text-sm text-gray-500 hover:bg-gray-100">
          Reply
        </button>
      </div>
      {/* replies */}
    </div>
  );
}

export default CommentItem;
