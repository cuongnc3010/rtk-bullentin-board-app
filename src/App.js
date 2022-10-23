import PostList from './features/posts/post-list';
import AddPostForm from './features/posts/add-post-form';
import './App.css';
function App() {
  return (
    <main className='App'>
      <AddPostForm />
      <PostList />
    </main>
  );
}

export default App;
