import {combineReducers} from '@reduxjs/toolkit';
import PostsReducer, {
  POSTS_REDUCER_NAME,
} from '../features/posts/redux/reducers/posts';

const rootReducer = combineReducers({
  [POSTS_REDUCER_NAME]: PostsReducer,
});

export default rootReducer;
