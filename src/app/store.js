import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/posts/posts.slice';
import usersReducer from '../features/users/users.slice';
export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
});
