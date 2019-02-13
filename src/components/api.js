/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export const getGitHubRepo = async (SEARCH) => {
  const { data } = await axios.get(`https://api.github.com/search/repositories?q=${SEARCH}`);
  return data.items;
};
