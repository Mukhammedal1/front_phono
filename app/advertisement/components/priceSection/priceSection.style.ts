import styled from "styled-components";

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 25px;
  .label{
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 343px;
  input {
    width: 223px;
    height: 48px;
    border: none;
    font-size: 16px;
    border-radius: 8px;
    padding: 12px 16px;
  }
  select {
    width: 104px;
    height: 48px;
    border-radius: 8px;
    border: none;
    padding: 12px 16px;
  }
`;
