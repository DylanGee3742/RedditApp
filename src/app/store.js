import { configureStore } from '@reduxjs/toolkit';
import subredditReducer from '../features/subreddit/subredditSlice.js';
import postsReducer from '../features/posts/postsSlice';
import commentsReducer from '../features/comments/commentsSlice';
import searchTermReducer from '../features/searchTerm/searchTermSlice';


export const store = configureStore({
  reducer: {
    subreddits: subredditReducer,
    posts: postsReducer,
    comments: commentsReducer,
    searchTerm: searchTermReducer
  },
});
