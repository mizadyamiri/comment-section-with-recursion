import CommentItem from "./CommentItem";
import Form from "./Form";

export default function CommentList() {
  return (
    <div className="m-4">
      <div className="text-lg font-semibold text-gray-700">Comments(X)</div>
      <CommentItem />
      <CommentItem />

      <Form />
    </div>
  );
}
