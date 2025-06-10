import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const verifyOtp = async (phone: string, otp: string) => {
  const response = await axios.post(`${API_BASE_URL}/auth/verifyotp`, { phone, otp });
  return response.data;
};