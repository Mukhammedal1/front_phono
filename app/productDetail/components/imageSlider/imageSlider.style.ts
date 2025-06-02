import styled from "styled-components";

export const SliderWrapper = styled.div`
  max-width: 820px;
  margin: 0 auto;
  /* margin-top: 30px; */
  position: relative;

  .slick-slide img {
    width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 10px;
    margin-bottom: 15px;
  }

  .slick-prev,
  .slick-next {
    z-index: 10;
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    margin-left: 35px;
    margin-right: 35px;
  }

  .slick-prev:before,
  .slick-next:before {
    color: black;
    font-size: 20px;
  }

  .slick-dots {
    bottom: 30px;
  }

  .slick-dots li button:before {
    font-size: 10px;
    color: white;
  }

  .slick-dots li.slick-active button:before {
    color: #000;
  }
`;
