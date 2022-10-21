import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    title: 'Learning Redux Toolkit',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, animi.',
  },
  {
    id: 2,
    title: 'Slice...',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
  },
];
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducer: {},
});
export default postsSlice.reducer;
