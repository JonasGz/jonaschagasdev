import "./header.scss";
import { Menu } from "./components/menu/menu";
import { Logo } from "./components/logo/logo";
import { Navbar } from "./components/navbar/navbar";

export const Header = () => {
  return (
    <div className="header">
      <Navbar />
      <Menu />
      <div className="header__logo">
        <Logo />
      </div>
    </div>
  );
};
