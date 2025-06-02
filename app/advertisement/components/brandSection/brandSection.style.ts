import styled from "styled-components";

export const TabWrapper = styled.div`
  background-color: rgb(216, 216, 216);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 343px;
  height: 48px;
  border-radius: 8px;
  padding: 4px 7px;
  button {
    width: 165px;
    height: 35px;
    border-radius: 8px;
    background-color: rgb(216, 216, 216);
    border: none;
  }
  .active {
    background-color: white;
    color: black;
  }
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;

  select {
    background-color: white;
    color: black;
    width: 343px;
    height: 48px;
    border-radius: 8px;
    border: none;
    font-size: 16px;
    padding: 0px 5px;
    opacity: 0.6;
  }
`;

export const SectionWrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80px;
  input {
    background-color: white;
    color: black;
    width: 343px;
    height: 48px;
    border-radius: 8px;
    border: none;
    font-size: 18px;
    padding: 0px 5px;
    opacity: 0.5;
  }
`;
