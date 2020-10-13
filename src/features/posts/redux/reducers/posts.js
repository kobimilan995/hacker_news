import {createSlice} from '@reduxjs/toolkit';

export const POSTS_REDUCER_NAME = 'posts';

const initialState = {
  allIds: [],
  byId: {},
  page: 1,
  isLoading: true,
};

const postsSlice = createSlice({
  name: POSTS_REDUCER_NAME,
  initialState,
  reducers: {
    getPostsInit(state) {
      state.isLoading = true;
    },
    getPostsSuccess(state, action) {
      const {allIds} = action.payload;
      state.allIds = allIds;
      state.isLoading = false;
    },
    getPostsFailure(state) {
      state.isLoading = true;
    },
    getSinglePostInit(state, action) {
      const {postId} = action.payload;
      state.byId[postId] = {
        post: {},
        isLoading: true,
      };
    },
    getSinglePostSuccess(state, action) {
      const {post} = action.payload;
      state.byId[post.id] = {
        post,
        isLoading: false,
      };
    },
    getSinglePostFailure(state, action) {
      const {postId} = action.payload;
      state.byId[postId] = {
        ...state.byId[postId],
        isLoading: false,
      };
    },
    setPage(state, action) {
      const {nextPage} = action.payload;
      state.page = nextPage;
    },
  },
});

export default postsSlice.reducer;

export const {
  getPostsInit,
  getPostsFailure,
  getPostsSuccess,
  getSinglePostFailure,
  getSinglePostInit,
  getSinglePostSuccess,
  setPage,
} = postsSlice.actions;
