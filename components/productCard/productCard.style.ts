import styled from "styled-components";

export const CardContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 276px;
  height: 354px;
  background-color: #f5f5f5;
  padding: 16px 16px 24px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }
  .mainImg {
    width: 100%;
    height: 174px;
    border-radius: 8px;
    object-fit: contain;
    margin: 0 auto;
  }
`;

export const CardTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 50px;
  img {
    width: 19px;
    height: 18px;
  }
  p {
    font-size: 18px;
    font-weight: 600;
  }
`;

export const CardStateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
`;

export const CardInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
  p {
    opacity: 0.7;
  }
  span {
    font-weight: 600;
  }
`;

export const CardPriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  h3 {
    color: blue;
  }
`;
