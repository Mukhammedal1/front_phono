import React, { useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../../../hooks/useAuth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Card,
  InputField,
  Button,
  Divider,
  GoogleButton,
  SubText,
  Title,
  Description,
} from "./SignIn.style";

function SignIn({ switchToRegister }: { switchToRegister: () => void }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signIn, loading } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!phoneNumber || !password) {
      toast.error("Требуется номер телефона и пароль.");
      return;
    }

    if (!/^\+\d{9,15}$/.test(phoneNumber)) {
      toast.error("Номер телефона указан в неправильном формате.");
      return;
    }

    try {
      const user = await signIn(phoneNumber, password);
      console.log("Login muvaffaqiyatli");
      console.log(user);

      localStorage.setItem("user", JSON.stringify({
        id: user.id,
        accessToken: user.access_token,
      }));
      
      toast.success("Вход выполнен успешно!");
      router.push("/");
    } catch (err: any) {
      // Backenddan kelgan xabarni foydalanuvchiga ko'rsatish
      const errorMessage =
        err.response?.data?.message?.message || "Неверный номер телефона или пароль.";
      toast.error(errorMessage);
    }
  };

  return (
    <Card className="container">
      <form onSubmit={handleSubmit} className="input-group">
        <Title>Вход</Title>
        <Description>Введите ваш номер телефона и пароль для входа</Description>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <InputField
          type="text"
          placeholder="Номер телефона"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <InputField
          // type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" disabled={loading}>
          {loading ? "Загрузка..." : "Входить"}
        </Button>
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
      </form>

      <SubText>
        У вас нет учетной записи?{" "}
        <span
          onClick={switchToRegister}
          style={{ color: "blue", cursor: "pointer" }}
        >
          Зарегистрироваться
        </span>
      </SubText>
    </Card>
  );
}

export default SignIn;