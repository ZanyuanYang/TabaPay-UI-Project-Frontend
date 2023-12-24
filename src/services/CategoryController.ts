import axios from 'axios';
import { BASE_URL } from '@/config/domain';

export async function getAllMenusUsingGet() {
  return axios.get(`${BASE_URL}/menu`);
}

export async function createCategoryUsingPost(
  body: API.CreateCategoryBody,
  menuName: string
) {
  return axios.post(`${BASE_URL}/category/${menuName}`, body);
}
