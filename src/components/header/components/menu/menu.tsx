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
import { useTranslation } from "react-i18next";
import { useMenu } from "../../../../hooks/use-menu";
import { LanguageSwitcher } from "../../../language-switcher/language-switcher";

export const Menu = () => {
  const { showMenu, handleMenu, handleLinkClick } = useMenu();
  const { t } = useTranslation();

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
        <ul>
          <li onClick={() => handleLinkClick("about")}>
            <UserRound size={16} /> {t("nav.about")}
          </li>
          <li onClick={() => handleLinkClick("works")}>
            <FolderGit size={16} /> {t("nav.works")}
          </li>
          <li onClick={() => handleLinkClick("technologies")}>
            <Library size={16} /> {t("nav.technologies")}
          </li>
          <li onClick={() => handleLinkClick("experiences")}>
            <BriefcaseBusiness size={16} /> {t("nav.experiences")}
          </li>
          <li onClick={() => handleLinkClick("contacts")}>
            <Headset size={16} /> {t("nav.contacts")}
          </li>
        </ul>
        <div className="menu__lang">
          <LanguageSwitcher inline />
        </div>
      </div>
    </>
  );
};
