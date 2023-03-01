import { useEffect } from 'react';
import SinglePost from '../components/SinglePost';
import usePostsStore from '../store/posts';

const PostList = () => {
  const posts = usePostsStore((state) => state.posts);
  const fetchPosts = usePostsStore((state) => state.fetchPosts);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div className="container mx-auto mt-5 p-8 bg-white">
      <div className="grid grid-cols-3 gap-5 justify-items-center">
        {posts.map((post, index) => (
          <SinglePost post={post} key={index} />
        ))}
      </div>
    </div>
  );
};

export default PostList;
