import { useTranslation } from "react-i18next";
import { Tag } from "../../../tag/tag";
import "./lp.scss";

type LpProps = {
  img: string;
  tags?: string[];
  title: string;
  description: string;
  url?: string;
};

export const Lp = (props: LpProps) => {
  const { t } = useTranslation();

  return (
    <div className="lp">
      <div className="lp__container">
        <div className="lp__img">
          <img src={props.img} alt={props.title} title={props.title} />
        </div>
        <div className="lp__tags">
          {props.tags?.map((tag) => (
            <Tag key={crypto.randomUUID()} name={tag} />
          ))}
        </div>
        <div className="lp__header">
          <h4 className="lp__title">{props.title}</h4>
          <p className="lp__description">{props.description}</p>
        </div>

        <div className="lp__container-button">
          <a href={props.url} target="_blank" className="lp__button">
            {t("common.access")}
          </a>
        </div>
      </div>
    </div>
  );
};
