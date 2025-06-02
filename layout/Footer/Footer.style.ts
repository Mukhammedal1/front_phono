import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0 auto;
  margin-top: 64px;
  margin-bottom: 55px;
  width: 90%;

  & > hr {
    width: 100%;
    border: none;
    border-top: 1px solid #999CA0;
    margin-bottom: 20px;
  }

  .footer-content {
    display: flex;
    gap: 40px;
  }
`

export const FooterParagrifWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: auto;

  & > p {
    color: #4E46B4;
    font-weight: 600;
    font-size: 32px;
    margin: 0;
  }
`

export const FooterContent = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`

export const LinksColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 150px;
`

export const FooterLink = styled.a`
  color: #374151;
  text-decoration: none;
  font-size: 14px;
  line-height: 1.5;
  transition: color 0.2s ease;

  &:hover {
    color: #4E46B4;
  }
`

export const AppStoreButton = styled.div`
  margin-top: 20px;
  margin-left: auto;
  cursor: pointer;
`

export const AppStoreImage = styled.div`
  background-color: #000;
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 12px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #333;
  }
`

export const SocialIcons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 20px;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
  }
`

export const SocialIcon = styled.a`
  width: 32px;
  height: 32px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  font-size: 16px;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  &.youtube {
    background-color: #ff0000;
  }

  &.vk {
    background-color: #0077ff;
  }

  &.telegram {
    background-color: #0088cc;
  }

  &.ok {
    background-color: #ff8c00;
  }
`