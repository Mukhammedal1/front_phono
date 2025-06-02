import styled from "styled-components";

interface ColorBoxProps {
  color: string;
  selected: boolean;
}

export const ColorPickerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 15px;
  margin-top: 10px;
  justify-content: start;
  width: 40%;
`;

export const ColorBox = styled.div<ColorBoxProps>`
  width: 100px;
  height: 60px;
  border-radius: 8px;
  background-color: ${(props) => props.color};
  border: ${(props) => (props.selected ? "3px solid green" : "1px solid #ccc")};
  cursor: pointer;
  transition: 0.2s;
  position: relative;

  &:hover {
    opacity: 0.8;
  }
  &::after {
    content: "${(props) => (props.selected ? "✔" : "")}";
    display: ${(props) => (props.selected ? "flex" : "none")};
    position: absolute;
    top: 4px;
    right: 6px;
    background-color: white;
    border: 2px solid green;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    font-size: 10px;
    align-items: center;
    justify-content: center;
    color: green;
    font-weight: bold;
  }
`;
