import styled from "styled-components";

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  textarea {
    width: 75%;
    height: 210px;
    padding: 12px 16px;
    font-size: 16px;
    opacity: 0.7;
  }
  p {
    opacity: 0.5;
    margin-left: 20px;
  }
`;
