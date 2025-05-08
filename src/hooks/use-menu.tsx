import { useState } from "react";

export const useMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLinkClick = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setShowMenu(false);
  };

  return {
    showMenu,
    handleMenu,
    handleLinkClick,
  };
};
