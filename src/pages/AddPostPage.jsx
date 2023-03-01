import { React, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import usePostsStore from '../store/posts';

const AddPostPage = () => {
  const title = useRef('');
  const body = useRef('');
  const navigate = useNavigate();
  const addNewPost = usePostsStore((state) => state.addPost);

  const createHandler = (e) => {
    e.preventDefault();
    let payload = {
      userId: 1,
      title: title.current.value,
      body: body.current.value,
    };
    addNewPost(payload);
    navigate('/');
    console.log(title.current.value);
  };

  return (
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
          <h2 className="mb-4 text-xl font-bold text-gray-900">Add Post</h2>
        </div>

        <form>
          <div className="grid gap-4">
            <div>
              <label className="mb-2 text-sm font-medium text-gray-900">
                Title
              </label>
              <textarea
                type="text"
                ref={title}
                rows="2"
                className="p-3 px-5 w-full text-bold text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                placeholder="title"
              ></textarea>
            </div>
            <div>
              <label className="mb-2 text-sm font-medium text-gray-900">
                Detail
              </label>
              <textarea
                type="text"
                ref={body}
                rows="8"
                className="p-3 px-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                placeholder="Detail"
              ></textarea>
            </div>
          </div>
          <div className="flex justify-end mt-3">
            <button
              type="button"
              onClick={createHandler}
              className="p-3 text-sm text-center text-white bg-blue-700 rounded-lg cursor-pointer hover:bg-blue-800"
            >
              New Post
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddPostPage;
