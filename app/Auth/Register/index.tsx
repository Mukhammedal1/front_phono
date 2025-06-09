import React, { useState } from "react";
import {
  FormContainer,
  FormTitle,
  Input,
  SubmitButton,
} from "./Register.style";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <FormContainer>
      <FormTitle>Ro'yxatdan o'tish</FormTitle>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Ismingiz"
          value={formData.name}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="phone"
          placeholder="Telefon raqamingiz"
          value={formData.phone}
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Parolingiz"
          value={formData.password}
          onChange={handleChange}
        />
        <SubmitButton type="submit">Ro'yxatdan o'tish</SubmitButton>
      </form>
    </FormContainer>
  );
}

export default Register;
