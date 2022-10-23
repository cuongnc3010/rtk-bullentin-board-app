import PostsList from './features/posts/posts-list';
import AddPostForm from './features/posts/add-post-form';
import './App.css';
function App() {
  return (
    <main className='App'>
      <AddPostForm />
      <PostsList />
    </main>
  );
}

export default App;
