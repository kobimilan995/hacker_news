import {POSTS_REDUCER_NAME} from '../reducers/posts';
import {POSTS_PAGE_SIZE} from '../../constants/pagination';

export const getCurrentPagePostsIds = (state) => {
  const {page, allIds} = state[POSTS_REDUCER_NAME];
  const beginIndex = (page - 1) * POSTS_PAGE_SIZE;
  const endIndex = page * POSTS_PAGE_SIZE;
  return allIds.slice(beginIndex, endIndex);
};

export const getCurrentPage = (state) => {
  return state[POSTS_REDUCER_NAME].page;
}

export const getSinglePostDataById = (state, postId) => {
  const {byId} = state[POSTS_REDUCER_NAME];
  return byId[postId];
};

export const getOriginalPostIndex = (state, tempIndex) => {
  const {page} = state[POSTS_REDUCER_NAME];
  return (page - 1) * POSTS_PAGE_SIZE + tempIndex;
};
