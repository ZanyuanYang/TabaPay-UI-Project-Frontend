import axios from 'axios';
import { BASE_URL } from '@/config/domain';

export async function getPostsByCategoryUsingGet(category: string) {
  return axios.get(`${BASE_URL}/post/${category}`);
}

export async function getPostByIdUsingGet(category: string, postId: string) {
  return axios.get(`${BASE_URL}/post/${category}/${postId}`);
}

export async function createPostUsingPost(body: API.CreatePostBody) {
  return axios.post(`${BASE_URL}/post`, body);
}

export async function likePostUsingPost(category: string, postId: string) {
  return axios.post(`${BASE_URL}/post/${category}/${postId}`);
}

export async function deletePostByIdUsingPost(
  category: string,
  postId: string
) {
  return axios.delete(`${BASE_URL}/post/${category}/${postId}`);
}
