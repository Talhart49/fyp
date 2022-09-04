import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    title: 'First Post',
    content: 'This is the first post',
  },
  {
    id: 2,
    title: 'Second Post',
    content: 'This is the second post',
  },
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userid) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userid,
          },
        };
      },
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
