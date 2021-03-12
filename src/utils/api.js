/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */

import axios from 'axios';

const baseUrl = 'http://localhost:3000';

export const headers = { headers: { Authorization: `Bearer ${localStorage.token}` } };

export const sendUnauthenticatedRequest = async (method, path, data) => {
  const response = await axios[method](`${baseUrl}/${path}`, data);
  return response;
};

export const FetchUserRequest = async (method, path, id) => {
  const response = await axios[method](`${baseUrl}/${path}/${id}`, headers);
  return response;
};

export const FetchPostRequest = async (method, path) => {
  const response = await axios[method](`${baseUrl}/${path}`, headers);
  return response;
};
