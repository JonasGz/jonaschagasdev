import { Tag } from "../../../tag/tag";
import "./work.scss";

type WorkProps = {
  img: string;
  tags: string[];
  title: string;
  description: string;
};

export const Work = (props: WorkProps) => {
  return (
    <div className="work">
      <div className="work__container">
        <div className="work__img">
          <img src={props.img} alt={props.title} title={props.title} />
        </div>
        <div className="work__tags">
          {props.tags.map((tag) => (
            <Tag key={crypto.randomUUID()} name={tag} />
          ))}
        </div>
        <div className="work__header">
          <h4 className="work__title">{props.title}</h4>
          <p className="work__description">{props.description}</p>
        </div>

        <a
          href="https://petdex.vercel.app/"
          target="_blank"
          className="work__container-button"
        >
          <button className="work__button">Acessar</button>
        </a>
      </div>
    </div>
  );
};
