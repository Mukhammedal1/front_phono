import { useState } from "react";
import {
  CardContainerWrapper,
  CardInfoWrapper,
  CardPriceWrapper,
  CardStateWrapper,
  CardTitleWrapper,
} from "./productCard.style";
import { TorgWrapper } from "../../app/productDetail/productDetail.style";

interface Phone {
  title: string;
  description: string;
  ram: string;
  rom: String;
  price: number;
  year: number;
  box_with_document: boolean;
  is_new: boolean;
  is_negotiable: boolean;
  brand: string;
  model: string;
  Currency: { id: number; name: string };
  Models: [];
  Brands: [];
  Color: [];
  userId: number;
  Address: [];
  onClick?: () => void;
}

const ProductCard = (props: Phone) => {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = (e:any) => {
    e.stopPropagation();
    setLiked(!liked);
  };

  return (
    <CardContainerWrapper onClick={props?.onClick}>
      <img src="/rasm.png" alt="" />
      <CardTitleWrapper>
        <p>{props?.title}</p>
        <img
          src={liked ? "/redlike.png" : "/like.png"}
          alt=""
          onClick={(e) => {
            handleLikeClick(e);
          }}
        />
      </CardTitleWrapper>
      <CardStateWrapper>
        <CardInfoWrapper>
          <p>Состояние:</p>
          <span>{props?.is_new ? "Новый" : "Б/У"}</span>
        </CardInfoWrapper>
        <CardInfoWrapper>
          <p>Память:</p>
          <span>{props?.rom}</span>
        </CardInfoWrapper>
      </CardStateWrapper>
      <CardPriceWrapper>
        <h3>{props?.price}</h3>
        <h3>{props?.Currency?.name}</h3>
        {props?.is_negotiable && (
          <TorgWrapper>
            <p>Торг есть</p>
          </TorgWrapper>
        )}
      </CardPriceWrapper>
    </CardContainerWrapper>
  );
};

export default ProductCard;
