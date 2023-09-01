// actions/index.js
export const addPost = (post) => {
  return {
    type: "ADD_POST",
    payload: post,
  };
};
