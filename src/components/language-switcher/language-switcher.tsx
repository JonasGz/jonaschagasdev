import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { BR, PT, US, ES } from "country-flag-icons/react/3x2";
import { ChevronDown } from "lucide-react";
import {
  SUPPORTED_LANGUAGES,
  LANGUAGE_STORAGE_KEY,
  type Language,
} from "../../i18n/detectLanguage";
import "./language-switcher.scss";

const FLAGS: Record<Language, typeof BR> = {
  "pt-BR": BR,
  "pt-PT": PT,
  en: US,
  es: ES,
};

export const LanguageSwitcher = ({
  inline = false,
}: { inline?: boolean } = {}) => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = (i18n.language as Language) ?? "pt-BR";
  const CurrentFlag = FLAGS[current] ?? BR;

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  const changeLanguage = (lng: Language) => {
    i18n.changeLanguage(lng);
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, lng);
    } catch {
      // localStorage may be unavailable — ignore.
    }
    setOpen(false);
  };

  if (inline) {
    return (
      <div className="language-switcher language-switcher--inline">
        {SUPPORTED_LANGUAGES.map((lng) => {
          const Flag = FLAGS[lng];
          const active = i18n.language === lng;
          return (
            <button
              key={lng}
              type="button"
              onClick={() => changeLanguage(lng)}
              className={`language-switcher__item ${
                active ? "language-switcher__item--active" : ""
              }`}
              aria-pressed={active}
              aria-label={lng}
            >
              <Flag className="language-switcher__flag" />
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className="language-switcher" ref={ref}>
      <button
        type="button"
        className="language-switcher__trigger"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <CurrentFlag className="language-switcher__flag" />
        <ChevronDown className="language-switcher__chevron" size={14} />
      </button>

      {open && (
        <ul className="language-switcher__menu" role="listbox">
          {SUPPORTED_LANGUAGES.map((lng) => {
            const Flag = FLAGS[lng];
            const active = i18n.language === lng;
            return (
              <li key={lng} role="option" aria-selected={active}>
                <button
                  type="button"
                  onClick={() => changeLanguage(lng)}
                  className={`language-switcher__option ${
                    active ? "language-switcher__option--active" : ""
                  }`}
                  aria-pressed={active}
                  aria-label={lng}
                >
                  <Flag className="language-switcher__flag" />
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};