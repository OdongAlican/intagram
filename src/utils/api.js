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

export const FetchPostRequest = async (method, path, tokenData) => {
  const headings = { headers: { Authorization: `Bearer ${tokenData}` } };
  const response = await axios[method](`${baseUrl}/${path}`, headings);
  return response;
};

export const FetchAllUsersRequest = async (method, path) => {
  const response = await axios[method](`${baseUrl}/${path}`, headers);
  return response;
};

export const FetchPeopleToFollow = async (method, path) => {
  const response = await axios[method](`${baseUrl}/${path}`, headers);
  return response;
};

export const CommentOnPost = async (method, path, data, token) => {
  const headings = { headers: { Authorization: `Bearer ${token}` } };
  const response = await axios[method](`${baseUrl}/${path}`, data, headings);
  return response;
};

export const LikeAPost = async (method, path, data, token) => {
  const headings = { headers: { Authorization: `Bearer ${token}` } };
  const response = await axios[method](`${baseUrl}/${path}`, data, headings);
  return response;
};

export const DeleteAPostLike = async (method, path, token) => {
  const headings = { headers: { Authorization: `Bearer ${token}` } };
  const response = await axios[method](`${baseUrl}/${path}`, headings);
  return response;
};

export const bookmarkAPost = async (method, path, data, token) => {
  const headings = { headers: { Authorization: `Bearer ${token}` } };
  const response = await axios[method](`${baseUrl}/${path}`, data, headings);
  return response;
};

export const DeleteAPostBookmark = async (method, path, token) => {
  const headings = { headers: { Authorization: `Bearer ${token}` } };
  const response = await axios[method](`${baseUrl}/${path}`, headings);
  return response;
};

export const FetchSinglePostRequest = async (method, path, token) => {
  const headings = { headers: { Authorization: `Bearer ${token}` } };
  const response = await axios[method](`${baseUrl}/${path}`, headings);
  return response;
};
