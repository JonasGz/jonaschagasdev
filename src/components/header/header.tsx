import "./header.scss";
import { Menu } from "./components/menu/menu";
import { Logo } from "./components/logo/logo";

export const Header = () => {
  return (
    <div className="header">
      <Menu />
      <div className="header__logo">
        <Logo />
      </div>
    </div>
  );
};
