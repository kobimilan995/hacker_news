import * as postsApi from '../../api/posts';
import {
  getPostsInit,
  getPostsSuccess,
  getPostsFailure,
  getSinglePostFailure,
  getSinglePostInit,
  getSinglePostSuccess,
} from '../reducers/posts';

export const getPosts = () => async (dispatch) => {
  try {
    dispatch(getPostsInit());
    const response = await postsApi.get();
    dispatch(getPostsSuccess({allIds: response.data}));
  } catch (error) {
    console.error({error});
    dispatch(getPostsFailure());
  }
};

export const getPost = ({postId}) => async (dispatch) => {
  try {
    dispatch(getSinglePostInit({postId}));
    const response = await postsApi.getSingle({postId});
    dispatch(getSinglePostSuccess({post: response.data}));
  } catch (error) {
    console.error({error});
    dispatch(getSinglePostFailure({postId}));
  }
};
