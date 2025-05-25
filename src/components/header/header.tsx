import "./header.scss";
import { Menu } from "./components/menu/menu";
import { Logo } from "./components/logo/logo";
import { Navbar } from "./components/navbar/navbar";
import { useEffect, useRef } from "react";

export const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY === 0) {
          headerRef.current.style.background = "transparent";
        }
        if (window.scrollY > 0) {
          headerRef.current.style.background = "#000000c3";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={headerRef} className="header">
      <Navbar />
      <Menu />
      <div className="header__logo">
        <Logo />
      </div>
    </div>
  );
};
