import axios from 'axios';

const GET_ALL_ENDPOINT =
  'https://hacker-news.firebaseio.com/v0/topstories.json';

const GET_SINGLE_ENDPOINT = ({postId}) => {
  return `https://hacker-news.firebaseio.com/v0/item/${postId}.json`;
};

export const get = () => {
  return axios.get(GET_ALL_ENDPOINT);
};

export const getSingle = ({postId}) => {
  return axios.get(GET_SINGLE_ENDPOINT({postId}));
};
