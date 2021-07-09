import React from "react";

// posts: 포스트 목록
// onOpenPost: 특정 포스트를 읽는 함수입니다
function PostList({ posts, onOpenPost }) {
  return (
    <ul>
      {posts.map((post) => (
        <li onClick={() => onOpenPost(post.id)} key={post.id}>
          {post.title}
        </li>
      ))}
    </ul>
  );
}

export default PostList;
