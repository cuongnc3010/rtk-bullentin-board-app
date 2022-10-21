import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../feature/posts/posts-slice';
export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});
