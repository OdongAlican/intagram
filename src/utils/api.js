/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */

import axios from 'axios';

const baseUrl = 'http://localhost:3000';

const headers = { headers: { Authorization: `Bearer ${localStorage.user}` } };

export const sendUnauthenticatedRequest = async (method, path, data) => {
  const response = await axios[method](`${baseUrl}/${path}`, data);
  return response;
};
