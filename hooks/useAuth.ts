import { useState } from 'react';
import { signIn, register } from '../api/auth';

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const signInHandler = async (phone: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await signIn(phone, password);
      return data; // Token yoki foydalanuvchi ma'lumotlari
    } catch (err: any) {
      let message = 'SignIn failed';

      if (err.response?.data?.message) {
        if (typeof err.response.data.message === 'string') {
          message = err.response.data.message;
        } else {
          message = JSON.stringify(err.response.data);
        }
      } else if (err?.message) {
        message = err.message;
      } else {
        message = 'Noma’lum xatolik yuz berdi.';
      }

      setError(message);
      throw new Error(message);
    } finally {
      setLoading(false);
    }
  };

  const registerHandler = async (name: string, phone: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await register(name, phone, password); // to‘g‘ri tartib
      return data;
    } catch (err: any) {
      let message = 'Register failed';
      if (err.response?.data?.message) {
        if (typeof err.response.data.message === 'string') {
          message = err.response.data.message;
        } else {
          message = JSON.stringify(err.response.data);
        }
      } else if (err?.message) {
        message = err.message;
      } else {
        message = 'Noma’lum xatolik yuz berdi.';
      }
      setError(message);
      throw new Error(message);
    } finally {
      setLoading(false);
    }
  };
  

  return {
    signIn: signInHandler,
    register: registerHandler,
    loading,
    error,
  };
};