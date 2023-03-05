/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getPosts } from '../../api/api';
import { Post } from '../../types/Post';
import type { RootState } from '../store';

export interface PostsState {
  loading: boolean;
  hasError: boolean;
  posts: Post[];
  lastRequestedPage: number;
}

const initialState: PostsState = {
  loading: false,
  hasError: false,
  posts: [],
  lastRequestedPage: 0,
};

export const fetchPosts = createAsyncThunk(
  'posts/fetch',
  async (page: number) => {
    const posts = await getPosts(page);

    return posts;
  },
);

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    deletePost: (state, action: PayloadAction<number>) => {
      state.posts = state.posts.filter(
        (post => post.id !== action.payload),
      );
    },
    setLastRequestedPage: (state, action: PayloadAction<number>) => {
      state.lastRequestedPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
      state.hasError = false;
    });
    builder.addCase(fetchPosts.fulfilled,
      (state, action: PayloadAction<Post[]>) => {
        state.loading = false;
        state.posts.push(...action.payload);
      });
    builder.addCase(fetchPosts.rejected, (state) => {
      state.loading = false;
      state.hasError = true;
    });
  },
});

export const {
  deletePost,
  setLastRequestedPage,
} = postsSlice.actions;

export const selectPosts = (state: RootState) => state.posts.posts;
export const selectLastRequestedPage = (state: RootState) => (
  state.posts.lastRequestedPage
);
export const selectError = (state: RootState) => state.posts.hasError;
export const selectIsLoading = (state: RootState) => state.posts.loading;

export default postsSlice.reducer;
