import React, { useState } from 'react';
import { FormContainer, FormTitle, Input, SubmitButton } from './SignIn.style';

function SignIn() {
  const [formData, setFormData] = useState({
    phone: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('SignIn Data:', formData);
  };

  return (
    <FormContainer>
      <FormTitle>Kirish</FormTitle>
      <form onSubmit={handleSubmit}>
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
        <SubmitButton type="submit">Kirish</SubmitButton>
      </form>
    </FormContainer>
  );
}

export default SignIn;