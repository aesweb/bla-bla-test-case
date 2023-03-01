import React, { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CommentSection from '../components/CommentSection';
import usePostsStore from '../store/posts';

function UpdatePage() {
  const { id } = useParams();

  const title = useRef('');
  const body = useRef('');

  const post = usePostsStore((state) => state.post);
  const comments = usePostsStore((state) => state.comments);
  const getPost = usePostsStore((state) => state.getPost);
  const getComments = usePostsStore((state) => state.getComments);
  const deletePost = usePostsStore((state) => state.deletePost);
  const updatePost = usePostsStore((state) => state.updatePost);

  const navigate = useNavigate();

  useEffect(() => {
    getPost(id);
    getComments(id);
  }, [getPost, getComments, id]);

  const handleDelete = (id) => {
    deletePost(id);
    navigate('/');
  };

  const updateHandle = (e) => {
    e.preventDefault();
    let payload = {
      userId: 1,
      title: title.current.value,
      body: body.current.value,
    };
    updatePost(payload);
    navigate('/');
  };

  return (
    <>
      <section className="bg-white p-10 mb-10">
        <div className="py-8 px-4 mx-auto max-w-2xl">
          <div className="flex items-center justify-between">
            <a href="/" className="hover:rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                />
              </svg>
            </a>
            <h2 className="mb-4 text-xl font-bold text-gray-900">Post</h2>
          </div>
          <form action="#">
            <div className="grid gap-4">
              <div>
                <label className="mb-2 text-sm font-medium text-gray-900">
                  Title
                </label>
                <textarea
                  ref={title}
                  rows="2"
                  className="p-3 px-5 w-full text-bold text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                >
                  {post.title}
                </textarea>
              </div>
              <div>
                <label className="mb-2 text-sm font-medium text-gray-900">
                  Detail
                </label>
                <textarea
                  ref={body}
                  rows="8"
                  className="p-3 px-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                >
                  {post.body}
                </textarea>
              </div>
            </div>
            <div className="flex justify-end pt-5">
              <button
                className="p-2 mr-2 text-sm text-center text-white bg-red-600 bg-blue-700 rounded-lg cursor-pointer hover:bg-red-800"
                onClick={() => handleDelete(post.id)}
              >
                delete
              </button>
              <button
                type="button"
                onClick={updateHandle}
                className="p-2 text-sm text-center text-white bg-blue-700 rounded-lg cursor-pointer hover:bg-blue-800"
              >
                update
              </button>
            </div>
          </form>
        </div>
        <div>
          <h3 className="font-bold flex justify-center">Comments</h3>
          {comments.map((comment, index) => (
            <CommentSection comment={comment} key={index} />
          ))}
        </div>
      </section>
    </>
  );
}

export default UpdatePage;
