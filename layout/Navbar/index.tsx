import React from "react";
import { NavbarLink, NavbarWrapper } from "./Navbar.style";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import { ButtonWrapper } from "../../components/Button/Button.style";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/createAdvertisement"); // bu yerga kerakli page'ni yozi
  };
  return (
    <header>
      <div className="container">
        <NavbarWrapper>
          <h2>Phono</h2>
          <NavbarLink>
            <a className="link-content">
              <HiOutlineMailOpen />
              <span>Сообщения</span>
            </a>
            <a className="link-content">
              <GrFavorite />
            </a>
            <a className="link-content">
              <FaRegUser />
              <span>Ваш профиль</span>
            </a>
            <ButtonWrapper onClick={handleClick}>
              Добавить объявление
            </ButtonWrapper>
          </NavbarLink>
        </NavbarWrapper>
      </div>
    </header>
  );
};

export default Navbar;
