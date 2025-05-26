import "./tag.scss";

type TagProps = {
  name: string;
};

export const Tag = (props: TagProps) => {
  return (
    <div key={crypto.randomUUID()} className="tag">
      <div className="tag__item">{props.name}</div>
    </div>
  );
};
