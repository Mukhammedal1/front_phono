import { useState } from 'react';
import { useAuth } from '../../../hooks/index';
import {
  FormContainer,
  FormTitle,
  Input,
  SubmitButton,
  SubText,
  Card,
  GoogleButton,
  Divider,
  Description,
} from './Register.style';
import { useRouter } from 'next/router';

function Register({ switchToSignIn }: { switchToSignIn: () => void }) {
  const [formData, setFormData] = useState({ phone: '', password: '', name: '' });
  const [error, setError] = useState<string | null>(null);
  const { register, loading } = useAuth();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const phoneRegex = /^\+998\d{9}$/;
    if (!phoneRegex.test(formData.phone)) {
      setError('Номер телефона имеет неправильный формат (например: +998901234567)');
      return;
    }

    if (formData.password.length < 6) {
      setError('Пароль должен быть длиной не менее 6 символов');
      return;
    }

    try {
      const data = await register(formData.name, formData.phone, formData.password);
      console.log('Зарегистрирован успешно:', data);
      router.push({
        pathname: '/verifyotp',
        query: { phone: formData.phone },
      });
    } catch (err: any) {
      console.error('Ошибка регистрации:', err);
      setError(err.message || 'Произошла неизвестная ошибка при регистрации.');
    }
  };

  return (
    <Card className="container">
      <FormContainer>
        <FormTitle>Регистрация</FormTitle>
        <Description>Введите свое имя, номер телефона и пароль для входа в систему</Description>
        <form onSubmit={handleSubmit} className='input-group'>
          <Input
            type="text"
            name="name"
            placeholder="Ваше имя"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <Input
            type="text"
            name="phone"
            placeholder="Номер телефона"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <Input
            // type="password"
            name="password"
            placeholder="Пароль"
            value={formData.password}
            onChange={handleChange}
            required 
          />

          <SubmitButton type="submit" disabled={loading} style={{ marginTop: '20px' }}>
            {loading ? 'Загрузка...' : 'Зарегистрироваться'}
          </SubmitButton>
        </form>

        <Divider>
          <span>ИЛИ</span>
        </Divider>

        <GoogleButton>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              fill="#EA4335"
              d="M12 11.5v2.9h5.9c-.3 1.5-1.2 2.8-2.5 3.6v3h4c2.3-2.1 3.6-5.2 3.6-8.6 0-.7-.1-1.4-.2-2H12z"
            />
            <path
              fill="#FBBC05"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#34A853"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Продолжить через Google
        </GoogleButton>

        {error && (
          <p style={{ color: 'red', textAlign: 'center', marginTop: '15px', padding: '10px', border: '1px solid red', borderRadius: '5px' }}>
            {error === "Phone number already in use."
              ? "Этот номер телефона уже зарегистрирован. Пожалуйста, используйте другой номер или войдите в систему."
              : error}
            {error === "Phone number already in use." && (
                <span onClick={switchToSignIn} style={{ color: 'blue', cursor: 'pointer', display: 'block', marginTop: '5px' }}>
                    Войти
                </span>
            )}
          </p>
        )}
      </FormContainer>

      <SubText>
        Уже есть аккаунт?{' '}
        <span onClick={switchToSignIn} style={{ color: 'blue', cursor: 'pointer' }}>
          Войти
        </span>
      </SubText>
    </Card>
  );
}

export default Register;