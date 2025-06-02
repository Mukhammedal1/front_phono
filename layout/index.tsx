import React, { FC } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { MainLayoutWrapper } from "./MainLayout.style";

interface MainLayoutProps {
  children: React.ReactNode;
}
const MainLayout: FC<MainLayoutProps> = (props) => {
  return (
    <MainLayoutWrapper>
      <Navbar />
      <div>{props.children}</div>
      <Footer />
    </MainLayoutWrapper>
  );
};

export default MainLayout;
