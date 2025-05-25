import "./tech.scss";

type TechProps = {
  url: string;
  name: string;
};

export const Tech = (props: TechProps) => {
  return (
    <div className="tech">
      <img
        src={props.url}
        alt={props.name}
        title={props.name}
        className="tech__icon"
      />
      <span className="tech__title" title={props.name}>
        {props.name}
      </span>
    </div>
  );
};
