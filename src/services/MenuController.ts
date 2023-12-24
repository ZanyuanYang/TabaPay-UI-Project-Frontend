import axios from 'axios';
import { BASE_URL } from '@/config/domain';

export async function getAllMenusUsingGet() {
  return axios.get(`${BASE_URL}/menu`);
}

export async function createMenuUsingPost(body: API.CreateMenuBody) {
  return axios.post(`${BASE_URL}/menu`, body);
}
