import styled from "styled-components";


export const ButtonWrapper = styled.button`
  height: 42px;
  background-color: white;
  color: #4b2aad;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    background-color: #f4f4f4;
    box-shadow: 0 0 0 2px rgba(75, 42, 173, 0.2);
  }

  &:active {
    background-color: #eaeaea;
  }
`

export const AuthButton = styled.button`
  background-color: white;
  border: 1px solid #999CA0;
  border-radius: 8px;
  color: #999CA0;
  background-color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  padding: 12px;
  width: 100%;
  transition: all 0.2s;
  
  &:hover {
    background-color: #4E46B4;
    color: white;
  }
`

export const FilterButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
`

export const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  width: 79px;
  height: 48px;
  border: none;
  border-radius: 8px;
  color: white;
  background-color: #4E46B4;
`