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
    const userData = JSON.parse(localStorage.getItem("user") || "{}");
    if (userData.accessToken) {
      router.push("/createAdvertisement");
    } else {
      router.push("/Auth");
    }
  };

  const handleUserNavigation = () => {
    const userData = JSON.parse(localStorage.getItem("user") || "{}");
    if (userData.accessToken) {
      router.push("/profile");
    } else {
      router.push("/Auth");
    }
  };

  const handleUserNavigationFavorities = () => {
    const userData = JSON.parse(localStorage.getItem("user") || "{}");
    if (userData.accessToken) {
      router.push("/favorites");
    } else {
      router.push("/Auth");
    }
  };

  const handleUserNavigationChat = () => {
    const userData = JSON.parse(localStorage.getItem("user") || "{}");
    if (userData.accessToken) {
      router.push("/chat");
    } else {
      router.push("/Auth");
    }
  };

  const handleClickHomePage = () => {
    router.push("/");
  };

  return (
    <header>
      <div className="container">
        <NavbarWrapper>
          <h2 className="logo" onClick={handleClickHomePage}>Phono</h2>
          <NavbarLink>
            <div className="link-content" onClick={handleUserNavigationChat}>
              <HiOutlineMailOpen />
              <span>Сообщения</span>
            </div>
            <div
              className="link-content"
              onClick={handleUserNavigationFavorities}
            >
              <GrFavorite />
            </div>
            <div className="link-content" onClick={handleUserNavigation}>
              <FaRegUser />
              <span>Ваш профиль</span>
            </div>
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
