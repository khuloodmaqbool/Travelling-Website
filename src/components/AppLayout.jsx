import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import FooterHeader from "./FooterHeader";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <FooterHeader/>
      <Footer />
    </>
  );
};
export default AppLayout;
