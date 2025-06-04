// components/ImageSlider.jsx
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderWrapper } from "./imageSlider.style";

type Image = {
  url: string;
};

type Props = {
  images: Image[];
};

export default function ImageSlider({ images }: Props) {
  const validImages = images.filter((img) => img?.url);
  const settings = {
    dots: validImages.length > 1,
    infinite: validImages.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: validImages.length > 1,
  };

  return (
    <SliderWrapper>
      <Slider {...settings}>
        {images?.map((img: any) => (
          <div key={img.id}>
            <img src={img.url} />
          </div>
        ))}
      </Slider>
    </SliderWrapper>
  );
}
