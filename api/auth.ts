import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const signIn = async (phoneNumber: string, password: string) => {
  const response = await axios.post(`${API_BASE_URL}/auth/signin`, { phoneNumber, password });
  return response.data;
};

export const register = async (name: string, phoneNumber: string, password: string ) => {
  const response = await axios.post(`${API_BASE_URL}/auth/signup`, { name, phoneNumber, password });
  return response.data;
};