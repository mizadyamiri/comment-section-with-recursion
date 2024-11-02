function useNode() {
  const insertNode = (tree, commentId, item) => {
    console.log("tree:", tree);
    console.log("commentID:", commentId);
    console.log("item:", item);

    if (tree.id === commentId)
      return {
        ...tree,
        replies: [
          ...tree.replies,
          {
            id: new Date().getTime(),
            user: item.user,
            message: item.message,
            replies: [],
          },
        ],
      };

    const latestNode = tree.replies.map(rep => {
      return insertNode(rep, commentId, item);
    });
    // console.log(latestNode);
    return { ...tree, replies: latestNode };
  };

  return { insertNode };
}

export default useNode;
