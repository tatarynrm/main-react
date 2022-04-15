import axios from 'axios';

// import './interceptors';

const getRequest = (url) => {
  return axios.get(url);
};

export const ApiProvider = {
  getRequest,
};
