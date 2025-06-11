import React, { useEffect, useState } from "react";
import {
  ButtonWrapper,
  ChatButtonWrapper,
  Color,
  ColorWrapper,
  DescriptionSection,
  DetailWrapper,
  ImageWrapper,
  InfoDetailWrapper,
  InputWrapper,
  LocationWrapper,
  MainTabsWrapper,
  MainWrapper,
  ParamWrapper,
  PhoneInfoWrapper,
  Price2Wrapper,
  PriceWrapper,
  ProductDetailWrapper,
  ProductSectionWrapper,
  ProductsWrapper,
  ProductsWrapper2,
  SearchWrapper,
  Tab,
  TabsContainer,
  TelButtonWrapper,
  TextWrapper,
  ThumbnailsRow,
  TitleWrapper,
  TorgWrapper,
} from "./productDetail.style";
import ImageSlider from "./components/imageSlider";
import { useRouter } from "next/router";
import { useGetAllPhones, useGetPhoneById } from "../../hooks";
import ProductCard from "../../components/productCard";
import LocationIcon from "../../icons/Location-icon";
import ChatIcon from "../../icons/Chat-icon";
import SearchIcon from "../../icons/search-icons";
import ArrowIcon from "../../icons/arrow-icon";
import FilterIcon from "../../icons/filter-icon";
import LikeIcon from "../../icons/like-icon";
import RedLikeIcon from "../../icons/red-like-icon";
import TelIcon from "../../icons/tel-icon";
import ChatModal from "../../components/Chat";

interface Review {
  id: number;
  date?: string;
  review: string;
  phoneId: number;
}

const ProductDetail = () => {
  const { productId } = useRouter().query;
  const { data: phoneData, isLoading } = useGetPhoneById(Number(productId));
  const [telText, setTelText] = useState(false);
  const [activeTab, setActiveTab] = useState("description");
  const [liked, setLiked] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const { data: phones2 } = useGetAllPhones();
  const router = useRouter();


  // console.log(phoneData)
  
  useEffect(() => {
    if (isChatOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to reset body scroll when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isChatOpen]);

  const handleProductClick = (id: number) => {
    router.push(`/productDetail/${id}`);
  };

  const phones = phones2?.slice(0, 8);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  const images = [
    { url: phoneData?.Images[0]?.url },
    { url: phoneData?.Images[4]?.url },
    { url: phoneData?.Images[5]?.url },
    { url: phoneData?.Images[6]?.url },
    { url: phoneData?.Images[7]?.url },
  ];

  if (isLoading || images.length <= 0) return <div className="spinner"></div>;

  const handleClick = () => {
    setTelText(!telText);
  };

  const handleChat = () => {
    setIsChatOpen(true);
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
  };

  return (
    <MainWrapper className="container">
      <SearchWrapper>
        <InputWrapper>
          <SearchIcon />
          <input type="text" placeholder="Type e.g Slots games" />
        </InputWrapper>
        <ParamWrapper>
          <FilterIcon style={{ cursor: "pointer" }} />
        </ParamWrapper>
        <button>Поиск</button>
      </SearchWrapper>
      <ProductSectionWrapper>
        <TextWrapper>
          <p>Главная</p>
          <ArrowIcon />
          <p>Объявления</p>
        </TextWrapper>
        <ProductDetailWrapper>
          <ImageWrapper>
            <ImageSlider images={images} />
            <ThumbnailsRow>
              <img src={phoneData?.Images[1]?.url} alt="" />
              <img src={phoneData?.Images[2]?.url} alt="" />
              <img src={phoneData?.Images[3]?.url} alt="" />
            </ThumbnailsRow>
          </ImageWrapper>
          <DetailWrapper>
            <TitleWrapper>
              <p>{phoneData?.title}</p>
              {liked ? (
                <LikeIcon
                  onClick={handleLikeClick}
                  style={{ cursor: "pointer" }}
                />
              ) : (
                <RedLikeIcon
                  onClick={handleLikeClick}
                  style={{ cursor: "pointer" }}
                />
              )}
            </TitleWrapper>
            <PriceWrapper>
              <Price2Wrapper>
                <p>{phoneData?.price}</p>
                <p>{phoneData?.Currency?.name}</p>
              </Price2Wrapper>
              {!phoneData?.is_negotiable && (
                <TorgWrapper>
                  <p>Торг есть</p>
                </TorgWrapper>
              )}
            </PriceWrapper>
            <LocationWrapper>
              <LocationIcon />
              <p>
                {phoneData?.Region?.name} {phoneData?.District?.name}
              </p>
            </LocationWrapper>
            <ButtonWrapper>
              {/* <ChatButtonWrapper>
                <ChatIcon /> */}
              <ChatButtonWrapper onClick={() => handleChat()}>
                <ChatIcon />
                Написать
              </ChatButtonWrapper>
              {!telText ? (
                <button onClick={handleClick}>Показать номер</button>
              ) : (
                <TelButtonWrapper onClick={handleClick}>
                  <TelIcon />
                  +998908521235
                </TelButtonWrapper>
              )}

              {/* <button onClick={handleClick}></button> */}
            </ButtonWrapper>
            <PhoneInfoWrapper>
              <InfoDetailWrapper>
                <span>Состояние</span>
                {phoneData?.is_new ? (
                  <h3>Новый</h3>
                ) : (
                  <h3>Бывший в употреблении</h3>
                )}
              </InfoDetailWrapper>
              <InfoDetailWrapper>
                <span>RAM</span>
                <h3>{phoneData?.ram}</h3>
              </InfoDetailWrapper>
              <InfoDetailWrapper>
                <span>ROM</span>
                <h3>{phoneData?.rom}</h3>
              </InfoDetailWrapper>
              <InfoDetailWrapper>
                <span>Год выпуска</span>
                <h3>{phoneData?.year}</h3>
              </InfoDetailWrapper>
              <InfoDetailWrapper>
                <span>Цвет</span>
                <ColorWrapper>
                  <Color color={phoneData?.Color?.code}></Color>
                  <h3>{phoneData?.Color?.name}</h3>
                </ColorWrapper>
              </InfoDetailWrapper>{" "}
              <InfoDetailWrapper>
                <span>Коробка c документами</span>
                {phoneData?.box_with_document ? <h3>Есть</h3> : <h3>Нет</h3>}
              </InfoDetailWrapper>
              <InfoDetailWrapper>
                <span>Размещено</span>
                <h3>{phoneData?.posted_date.slice(0, 10)}</h3>
              </InfoDetailWrapper>
              <InfoDetailWrapper>
                <span>Просмотров</span>
                <h3>{phoneData?.views}</h3>
              </InfoDetailWrapper>
            </PhoneInfoWrapper>
          </DetailWrapper>
        </ProductDetailWrapper>
      </ProductSectionWrapper>
      <MainTabsWrapper>
        <TabsContainer>
          <Tab
            active={activeTab === "description"}
            onClick={() => setActiveTab("description")}
          >
            Описание
          </Tab>
          <Tab
            active={activeTab === "reviews"}
            onClick={() => setActiveTab("reviews")}
          >
            Отзывы
          </Tab>
        </TabsContainer>

        <DescriptionSection>
          {activeTab === "description" && <p>{phoneData?.description}</p>}
          {activeTab === "reviews" &&
            (phoneData?.Reviews?.length > 0 ? (
              phoneData.Reviews.map((item: Review) => (
                <p key={item.id}>{item.review}</p>
              ))
            ) : (
              <p>Отзывы пока отсутствуют</p>
            ))}
        </DescriptionSection>
      </MainTabsWrapper>
      <ProductsWrapper>
        <h1>Вам может понравиться</h1>
        <ProductsWrapper2>
          {phones?.map((phone: any) => (
            <ProductCard
              onClick={() => handleProductClick(phone.id)}
              {...phone}
              key={phone.id}
            />
          ))}
        </ProductsWrapper2>
      </ProductsWrapper>
      <ChatModal
        isOpen={isChatOpen}
        onClose={handleCloseChat}
        productOwner={phoneData?.User}
        product={{
          name: phoneData?.title,
          image: phoneData?.Images[0]?.url,
          price: `${phoneData?.price} ${phoneData?.Currency?.name}`,
        }}
      />
    </MainWrapper>
  );
};

export default ProductDetail;
