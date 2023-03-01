import React from 'react';
import { Link } from 'react-router-dom';

function SinglePost({ post }) {
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
      <Link to={`/posts/${post.id}`}>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {post.title}
        </h5>
        <p className="font-normal text-gray-700">{post.body}</p>
      </Link>
    </div>
  );
}

export default SinglePost;
