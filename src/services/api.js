import axios from "axios";

const API_BASE_URL = 'https://your-backend-api.com/api'

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true
});

export const getPosts = async() => {
    const response = await apiClient.get('/posts');
    return response.data;
}

export const getPostsById = async(postId) => {
    const response = await apiClient.get(`/posts/${postId}`);
    return response.data;
}