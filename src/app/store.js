import { configureStore } from '@reduxjs/toolkit';
import subredditReducer from '../features/subreddit/subredditSlice.js';
import postsReducer from '../features/posts/postsSlice';

export const store = configureStore({
  reducer: {
    subreddits: subredditReducer,
    posts: postsReducer
  },
});
