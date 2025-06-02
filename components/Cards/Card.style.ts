import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 12px;
  padding: 16px;
  background-color: #F5F5F5;
  width: 174px;
  height: 118px;
  text-align: center;

  .card-img img {
    width: 100%;
    border-radius: 8px;
    object-fit: contain;
    margin-bottom: 12px;
  }

  .card-label {
    font-size: 16px;
    font-weight: 500;
    margin-top: 10px;
  }
`;
