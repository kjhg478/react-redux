import React from 'react';

function Post({ post }) {
  console.log('콘솔', post);
  const { title, body } = post;
  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
}

export default Post;
