import "./menu.scss";
import {
  AlignJustify,
  BriefcaseBusiness,
  FolderGit,
  Headset,
  Library,
  UserRound,
  X,
} from "lucide-react";
import { useMenu } from "../../../../hooks/use-menu";

export const Menu = () => {
  const { showMenu, handleMenu, handleLinkClick } = useMenu();

  return (
    <>
      <div onClick={handleMenu} className="menu">
        {showMenu ? (
          <X color="white" absoluteStrokeWidth />
        ) : (
          <AlignJustify color="white" absoluteStrokeWidth />
        )}
      </div>
      <div className={`menu__content ${showMenu ? "menu__content--open" : ""}`}>
        {showMenu && (
          <ul>
            <li onClick={() => handleLinkClick("about")}>
              <UserRound size={16} /> Sobre
            </li>
            <li onClick={() => handleLinkClick("works")}>
              <FolderGit size={16} /> Projetos
            </li>
            <li onClick={() => handleLinkClick("technologies")}>
              <Library size={16} /> Tecnologias
            </li>
            <li onClick={() => handleLinkClick("experiences")}>
              <BriefcaseBusiness size={16} /> Experiências
            </li>
            <li onClick={() => handleLinkClick("contacts")}>
              <Headset size={16} /> Contato
            </li>
          </ul>
        )}
      </div>
    </>
  );
};
