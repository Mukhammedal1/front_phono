import React from 'react'
import {
  FooterWrapper,
  FooterParagrifWrap,
  FooterContent,
  LinksColumn,
  FooterLink,
  SocialIcons,
  SocialIcon,
  AppStoreButton,
  AppStoreImage,
} from './Footer.style'

const Footer = () => {
  return (
    <div className="container">
      <FooterWrapper>
        <hr />

        <div className='footer-content container'>
          <FooterParagrifWrap>
            <p>Phono</p>
          </FooterParagrifWrap>

          <FooterContent>
            <LinksColumn>
              <FooterLink href="#">Мобильное приложение</FooterLink>
              <FooterLink href="#">Помощь</FooterLink>
              <FooterLink href="#">Платные услуги</FooterLink>
              <FooterLink href="#">Реклама на сайте</FooterLink>
            </LinksColumn>

            <LinksColumn>
              <FooterLink href="#">Условия использования</FooterLink>
              <FooterLink href="#">Политика конфиденциальности</FooterLink>
              <FooterLink href="#">Партнеры</FooterLink>
              <FooterLink href="#">Как продавать и покупать?</FooterLink>
            </LinksColumn>

            <LinksColumn>
              <FooterLink href="#">Правила безопасности</FooterLink>
              <FooterLink href="#">Карта сайта</FooterLink>
              <FooterLink href="#">Карта регионов</FooterLink>
              <FooterLink href="#">Карьера в Phono</FooterLink>
            </LinksColumn>

            

            <SocialIcons>
              <AppStoreButton>
                <AppStoreImage>
                  <span>🍎</span>
                  <div>
                    <div style={{ fontSize: "10px" }}>Загрузить из</div>
                    <div style={{ fontSize: "14px", fontWeight: "bold" }}>App Store</div>
                  </div>
                </AppStoreImage>
              </AppStoreButton>
              <div className='icon'>
                <SocialIcon href="#" className="youtube">▶</SocialIcon>
                <SocialIcon href="#" className="vk">ВК</SocialIcon>
                <SocialIcon href="#" className="telegram">✈</SocialIcon>
                <SocialIcon href="#" className="ok">О</SocialIcon>
              </div>
            </SocialIcons>
          </FooterContent>
        </div>
      </FooterWrapper>
    </div>
  )
}

export default Footer;