import { create } from 'zustand';
import axios from 'axios';

const usePostsStore = create((set) => ({
  posts: [],
  post: {},
  comments: [],

  fetchPosts: async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts?userId=1'
    );
    set({ posts: response.data });
  },

  fetchComments: async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts/1/comments'
    );
    set({ comments: response.data });
  },

  getPost: async (id) => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts?id=' + id
    );
    set({ post: response.data[0] });
  },

  getComments: async (id) => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts/' + id + '/comments'
    );
    set({ comments: response.data });
  },

  addPost: async (payload) => {
    await axios.post('https://jsonplaceholder.typicode.com/posts', payload);
  },

  deletePost: async (id) => {
    await axios.delete('https://jsonplaceholder.typicode.com/posts/' + id);
    set((state) => ({
      posts: state.posts.filter((post) => post.id !== id),
    }));
  },

  updatePost: async (payload) => {
    await axios.put('https://jsonplaceholder.typicode.com/posts/1', payload);
  },
}));

export default usePostsStore;
