import React, { useRef } from "react";
import { HomeWrapper } from "./Home.styled";
import { VscSettings } from "react-icons/vsc";
import { SearchButton } from "../../components/Button/Button.style";
import { IoIosSearch } from "react-icons/io";
import Card from "../../components/Cards";
import { useGetAllPhones } from "../../hooks";
import { useRouter } from "next/router";
import ProductCard from "../../components/productCard";

const Home = () => {
  const { data: phones } = useGetAllPhones();
  const images = [
    { img: "/images/apple.svg", title: "Apple" },
    { img: "/images/huawei.svg", title: "Huawei" },
    { img: "/images/xiaomi.svg", title: "Xiaomi" },
    { img: "/images/samsung.svg", title: "Samsung" },
    { img: "/images/blackview.svg", title: "Blackview" },
    { img: "/images/philips.svg", title: "Philips" },
    { img: "/images/xiaomi.svg", title: "Xiaomi" },
    { img: "/images/apple.svg", title: "Apple" },
    { img: "/images/blackview.svg", title: "Blackview" },
    { img: "/images/samsung.svg", title: "Samsung" },
    { img: "/images/huawei.svg", title: "Huawei" },
    { img: "/images/smotretvse.svg", title: "Смотреть все" },
  ];

  const router = useRouter();

  const handleClick = (id: number) => {
    router.push(`/productDetail/${id}`);
  };

  const productSectionRef = useRef<HTMLDivElement>(null);

  const scrollToProducts = () => {
    productSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="container">
      <HomeWrapper>
        <div className="search-input container">
          <IoIosSearch className="searchIcon" />
          <input type="text" placeholder="Type e.g Slots games" />
          <div className="settings-icon">
            <VscSettings />
          </div>
          <SearchButton>Поиск</SearchButton>
        </div>
        <h3>Категории</h3>
        <div onClick={scrollToProducts} className="cards-group container">
          {images.map((item, i) => (
            <div key={i} className="card-container">
              {/* Card komponenti */}
              <Card img={item.img} alt={`Card ${i + 1}`} />
              {/* Carddan tashqarida joylashgan p elementi */}
              <p>{item.title}</p>
            </div>
          ))}
        </div>
        <h3>Объявления</h3>
        <div className="product-cards container" ref={productSectionRef}>
          {phones?.map((phone: any) => (
            // <div key={phone.id} className="product-container container">
              <ProductCard onClick={() => handleClick(phone.id)} {...phone} />
            // </div>
          ))}
        </div>
      </HomeWrapper>
    </div>
  );
};

export default Home;
