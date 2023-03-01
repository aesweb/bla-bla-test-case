import React, { useEffect } from 'react';
import usePostsStore from '../store/posts';

function Header() {
  const posts = usePostsStore((state) => state.posts);

  const fetchPosts = usePostsStore((state) => state.fetchPosts);

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto p-8 mt-8 bg-white">
      <div className="flex justify-between">
        <div className="flex items-center justify-between">
          <a href="/" className="flex">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Arbit Blog
            </span>
          </a>
        </div>
        <div className="flex items-center justify-center">
          <a href="/addpost">
            <button className="p-3 text-sm text-center text-white bg-blue-700 rounded-lg cursor-pointer hover:bg-blue-800 mr-3">
              New Post
            </button>
          </a>

          <a href="/" className="mr-3">
            Post's ({posts.length})
          </a>

          <a href="/" className="mr-4">
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
          </a>
          <a href="/" className="mr-4">
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </a>

          <img
            className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="pp"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
