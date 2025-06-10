import React, { useState, useEffect } from 'react';
import { useVerifyOtp } from '../../../hooks/useVerifyOtp';
import { Container, Card, Title, InputField, Button, ErrorText, SubText } from './Verify.style';
import { useRouter } from 'next/router';

function VerifyOtp() {
  const router = useRouter();
  const [phone, setPhone] = useState(''); // Telefon raqamini kiritish uchun state
  const [otp, setOtp] = useState(''); // OTP kiritish uchun state
  const { handleVerifyOtp, loading, error } = useVerifyOtp();
  const [resendTimer, setResendTimer] = useState(60); // Qayta yuborish uchun taymer (soniyalar)
  const [canResend, setCanResend] = useState(false); // Qayta yuborish tugmasi faolligi

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      setCanResend(true); // Taymer tugagandan keyin tugma faollashadi
    }
  }, [resendTimer]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!phone || !otp) {
      console.error('Требуется номер телефона и одноразовый пароль.');
      return;
    }

    try {
      await handleVerifyOtp(phone, otp); // Telefon raqami va OTPni yuborish
      console.log('Код успешно проверен');
      router.push('/home'); // Tasdiqlangandan keyin home sahifasiga o'tish
    } catch (err) {
      console.error('Oшибка при проверке кода:', err);
    }
  };

  const handleResendOtp = () => {
    if (!canResend) return;
    console.log('OTP qayta yuborildi');
    setResendTimer(60); // Taymerni qayta boshlash
    setCanResend(false); // Tugmani vaqtinchalik bloklash
  };

  const handleBackToRegister = () => {
    router.push('/Auth'); // Register sahifasiga qaytish
  };

  return (
    <Container className='container'>
      <Card>
        <Title>SMS-подтверждение пароля</Title>
        <form onSubmit={handleSubmit} className="input-group">
          <InputField
            type="text"
            placeholder="Введите свой номер телефона"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <InputField
            type="text"
            placeholder="введите код"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <Button type="submit" disabled={loading}>
            {loading ? 'Загрузка...' : 'Подтверждение'}
          </Button>
          <Button
            onClick={handleResendOtp}
            disabled={!canResend}
            style={{
              backgroundColor: canResend ? '#5850ec' : '#9ca3af',
              cursor: canResend ? 'pointer' : 'not-allowed',
            }}
          >
            {canResend ? 'Отправить код повторно' : `Повторно отправить (${resendTimer} секунды)`}
          </Button>
          <Button onClick={handleBackToRegister} style={{ backgroundColor: '#f44336' }}>
            Возвращаться
          </Button>
        </form>
        {error && <ErrorText>{error}</ErrorText>}
      </Card>
    </Container>
  );
}

export default VerifyOtp;