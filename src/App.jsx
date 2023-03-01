import PostList from './pages/PostList';
import MainLayout from './layout/MainLayout';
import UpdatePage from './pages/UpdatePage';
import { Routes, Route } from 'react-router-dom';
import AddPostPage from './pages/AddPostPage';

function App() {
  return (
    <>
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<PostList />} />
            <Route path="posts/:id" element={<UpdatePage />} />
            <Route path="addpost" element={<AddPostPage />} />

            {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
            {/* <Route path="*" element={<NoMatch />} /> */}
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
