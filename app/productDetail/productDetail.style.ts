import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
  margin-top: 50px;
`;

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  button {
    width: 79px;
    height: 48px;
    text-align: center;
    padding: 12px 16px;
    border-radius: 8px;
    border: none;
    background-color: #4e46b4;
    color: white;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background-color: #f5f5f5;
  width: 85%;
  height: 48px;
  padding: 12px 16px;
  img {
    width: 24px;
    height: 24px;
  }
  input {
    width: 100%;
    border: none;
    outline: none;
    background-color: #f5f5f5;
  }
`;

export const ParamWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: #f5f5f5;
  width: 48px;
  height: 48px;
`;

export const ProductSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProductDetailWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* gap: 15px; */
  /* padding: 10px 10px; */
  /* height: 600px; */
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  margin-bottom: 10px;
`;

export const ImageWrapper = styled.div`
  width: 58%;
  gap: 15px;
  /* height: 600px; */
`;

export const ThumbnailsRow = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 8px;
  }
`;

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40%;
  gap: 30px;
  /* height: 700px; */
  /* border: 1px solid black; */
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    font-size: 32px;
    font-weight: 600;
  }
  img {
    width: 30px;
    height: 30px;
  }
  img.liked {
    color: red;
  }
`;

export const PriceWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 50px;
`;

export const Price2Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 160px;
  font-size: 24px;
  font-weight: 600;
`;

export const TorgWrapper = styled.div`
  width: 80px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4ad15f33;
  border-radius: 8px;
  p {
    color: green;
  }
`;

export const LocationWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 15px;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    width: 230px;
    height: 48px;
    border-radius: 8px;
    border: none;
    color: white;
    background-color: #4e46b4;
    padding: 12px 16px;
  }
`;

export const ChatButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 230px;
  height: 48px;
  border-radius: 8px;
  border: 1px solid #4e46b4;
  color: #4e46b4;
  padding: 12px 16px;
`;

export const PhoneInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
`;

export const InfoDetailWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;
  border-bottom: 1px solid grey;
  span {
    opacity: 0.7;
  }
`;

export const ColorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const Color = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props?.color};
`;

export const MainTabsWrapper = styled.div`
  overflow-wrap: break-word;
`;

export const TabsContainer = styled.div`
  display: flex;
  gap: 32px;
`;

export const Tab = styled.button<{ active: boolean }>`
  background: none;
  border: none;
  padding: 12px 16px;
  cursor: pointer;
  font-size: 16px;
  color: ${(props) => (props.active ? "#6c5ce7" : "#666")};
  border-bottom: 2px solid
    ${(props) => (props.active ? "#6c5ce7" : "transparent")};
  transition: all 0.2s;

  &:hover {
    color: #6c5ce7;
  }
`;

export const DescriptionSection = styled.div`
  padding: 12px 0;
  p {
    line-height: 24px;
    color: black;
    font-size: 16px;
  }
`;

export const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
`;

export const ProductsWrapper2 = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 25px;
`;
