function Form() {
  return (
    <form>
      <input
        type="text"
        className="my-2 w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring"
        placeholder="Add your Name..."
      />
      <input
        type="text"
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
