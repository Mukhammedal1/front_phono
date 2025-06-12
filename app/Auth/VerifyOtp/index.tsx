import React, { useState, useEffect } from 'react';
import { useVerifyOtp } from '../../../hooks/useVerifyOtp';
import { Container, Card, Title, InputField, Button, ErrorText, SubText } from './Verify.style';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function VerifyOtp() {
  const router = useRouter();
  const [phone, setPhone] = useState(''); // Telefon raqamini kiritish uchun state
  const [otp, setOtp] = useState(''); // OTP kiritish uchun state
  const { handleVerifyOtp, loading, error } = useVerifyOtp();
  const [resendTimer, setResendTimer] = useState(60); // Taymer (soniyalar)

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      toast.error('Время истекло, попробуйте снова.');
      router.push('/Auth/signIn'); // Auth sahifasiga yo'naltirish
    }
  }, [resendTimer, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!phone || !otp) {
      toast.error('Требуется номер телефона и одноразовый пароль.');
      return;
    }

    try {
      await handleVerifyOtp(phone, otp); // Telefon raqami va OTPni yuborish
      toast.success('Код успешно подтвержден!');
      router.push('/Auth/signIn'); // Tasdiqlangandan keyin home sahifasiga o'tish
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.message || 'Ошибка при подтверждении кода.';
      toast.error(errorMessage);
    }
  };

  return (
    <Container>
      <Card>
        <Title>Подтверждение OTP</Title>
        <form onSubmit={handleSubmit} className="input-group">
          <InputField
            type="text"
            placeholder="Введите свой номер телефона"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <InputField
            type="text"
            placeholder="Введите код"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          {/* Taymerni inputning tagida ko'rsatish */}
          <SubText>Оставшееся время: {resendTimer} секунд</SubText>
          <Button type="submit" disabled={loading}>
            {loading ? 'Загрузка...' : 'Подтверждение'}
          </Button>
        </form>
        {error && <ErrorText>{error}</ErrorText>}
      </Card>
    </Container>
  );
}

export default VerifyOtp;