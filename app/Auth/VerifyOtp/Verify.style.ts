import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: #f9fafb;
  height: 100vh;
  margin-top: auto;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  padding: 30px;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 16px;
  background-color: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);

  .input-group {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 20px;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin: 0 0 38px 0;
  color: #000;
`;

export const Description = styled.p`
  font-size: 14px;
  color: #6b7280;
  margin: 0 0 24px 0;
  font-weight: 400;
`;

export const InputField = styled.input`
  width: 100%;
  height: 48px;
  padding: 0 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 15px;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #6366f1;
  }

  &.error {
    border-color: #e53935;
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 48px;
  background-color: #5850ec;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #4338ca;
  }

  &:disabled {
    background-color: #9ca3af;
    cursor: not-allowed;
  }
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 0.875rem;
  text-align: center;
  margin-top: 1rem;
`;

export const SubText = styled.p`
  font-size: 14px;
  color: #6b7280;
  text-align: center;
  margin: 24px 0 0 0;

  a {
    color: #5850ec;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;