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
        <div className="work__img"></div>
        <div className="work__tags">
          {props.tags.map((tag) => (
            <div key={crypto.randomUUID()} className="work__container-tag">
              <div className="work__tag">{tag}</div>
            </div>
          ))}
        </div>
        <h4 className="work__title">{props.title}</h4>
        <p className="work__description">{props.description}</p>
      </div>
    </div>
  );
};
