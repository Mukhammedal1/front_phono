import { useState } from 'react';
import { verifyOtp } from '../api/verify';

export const useVerifyOtp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleVerifyOtp = async (phone: string, otp: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await verifyOtp(phone, otp);
      return data; // Tasdiqlash muvaffaqiyatli bo'lsa, backenddan kelgan ma'lumot
    } catch (err: any) {
      setError(err.response?.data?.message || 'Tasdiqlashda xatolik yuz berdi.');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { handleVerifyOtp, loading, error };
};