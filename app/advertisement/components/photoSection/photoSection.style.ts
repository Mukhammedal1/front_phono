import styled from "styled-components";

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const GridWrapper = styled.div`
  width: 75%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 16px;
  justify-content: start;
`;

export const AddPhotoBoxWrapper = styled.div`
  width: 176px;
  height: 136px;
  border: 2px dashed #845ec2;
  border-radius: 8px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #7b61ff;
  gap: 20px;
  cursor: pointer;
  font-size: 18px;
  .plus {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid #7b61ff;
  }
  span {
    font-size: 26px;
  }
`;

export const PhotoBoxWrapper = styled.div`
  position: relative;
  width: 176px;
  height: 136px;
  border-radius: 8px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`;

export const RemoveButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: white;
  color: red;
  border: 1px solid red;
  border-radius: 50%;
  width: 26px;
  height: 26px;
  cursor: pointer;
  z-index: 1;
  svg {
    font-size: 18px;
    font-weight: 700;
    transform: translate(-1px, 1px); /* ← bu yerda siljishi mumkin */
  }
`;
