import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Card, Container, Divider, GoogleButton } from './Auth.styled';
import { AuthButton } from '../../components/Button/Button.style';
import { useGoogleLogin } from '../../hooks/useGoogleLogin'; // yo‘lni moslang
import { useRouter } from 'next/router';

function AuthPage() {
  const [phone, setPhone] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(30);
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const router = useRouter();

  // Timer
  useEffect(() => {
    if (otpSent && timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [otpSent, timer]);

  const handleOtpChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5 && inputsRef.current[index + 1]) {
      if (inputsRef.current[index + 1]) {
        inputsRef.current[index + 1]?.focus();
      }
    }
  };

  const handlePhoneSubmit = () => {
    setOtpSent(true);
    setTimer(30);
  };

  const handleVerify = () => {
    const code = otp.join('');
    console.log('Tasdiqlanayotgan OTP:', code);
    router.push('/home')
  };

  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '';

  // Google login muvaffaqiyatli bo‘lganda chaqiriladi
  const handleLoginSuccess = useCallback(async (response: { credential: any; }) => {
    const idToken = response.credential;
    try {
      const res = await fetch('/api/auth/google', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: idToken }),
      });
      const data = await res.json();
      if (data.success) {
        alert('Muvaffaqiyatli Google orqali login bo‘ldi');
        // keyingi harakat: navigate yoki token saqlash
      }
    } catch (error) {
      console.error('Google login xatosi:', error);
    }
  }, []);

  const handleLoginError = useCallback((error: any) => {
    console.error('Google login xatosi:', error);
  }, []);

  useGoogleLogin({
    clientId,
    onSuccess: handleLoginSuccess,
    onError: handleLoginError,
  });

  return (
    <Container>
      <Card>
        {!otpSent ? (
          <>
            <h3>Авторизация</h3>
            <p>Ha ваш номер будет отправлен смс код для подтверждения регистрации</p>
            <div className='input-wrapper'>
              <input
                type="text"
                placeholder='Введите свой номер телефона'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <p>
                Нажимая кнопку вы соглашаетесь c <a href='#'>публичной офертой</a>
              </p>
            </div>
            <AuthButton type='button' onClick={handlePhoneSubmit}>
              Получить код
            </AuthButton>
            <Divider>
              <span>ИЛИ</span>
            </Divider>
            {/* Google Sign-In button */}
            <GoogleButton>
              Продолжить через Google
              <div
                id="g_id_signin"
                className="g_id_signin"
                data-type="standard"
                data-shape="rectangular"
                data-theme="outline"
                data-text="signin_with"
                data-size="large"
                data-logo_alignment="left"
              ></div>
            </GoogleButton>
          </>
        ) : (
          <>
            <h3>Код подтверждения</h3>
            <p>На ваш номер будет отправлен смс код для подтверждения регистрации</p>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', margin: '20px 0' }}>
              {otp.map((digit, idx) => (
                <input
                  key={idx}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(e.target.value, idx)}
                  ref={(el) => {
                    inputsRef.current[idx] = el;
                  }}
                  style={{
                    width: '40px',
                    height: '40px',
                    fontSize: '24px',
                    textAlign: 'center',
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                  }}
                />
              ))}
            </div>
            <p style={{ textAlign: 'center' }}>0:{timer < 10 ? `0${timer}` : timer}</p>
            <AuthButton
              type='button'
              onClick={handleVerify}
              disabled={otp.some((digit) => digit === '')}
            >
              Подтвердить
            </AuthButton>
          </>
        )}
      </Card>
    </Container>
  );
}

export default AuthPage;
