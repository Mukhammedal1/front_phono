import styled from "styled-components";

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 80px;
  margin: 0 auto;

  & > h2 {
    color: white;
    font-size: 32px;
    font-weight: 600;
    font-family: Arial, Helvetica, sans-serif;
  }
  .logo{
    cursor: pointer;
  }
`;
export const NavbarLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  cursor: pointer;

  .link-content {
    display: flex;
    align-items: center;
    gap: 12px;
    color: white;
    text-decoration: none;

    svg {
      font-size: 24px;
    }

    &:hover {
      opacity: 0.8;
    }
  }
`;
