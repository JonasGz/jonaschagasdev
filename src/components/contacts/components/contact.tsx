import "./contact.scss";

type ContactProps = {
  url: string;
  href?: string;
  name: string;
  title: string;
  description: string;
};

export const Contact = (props: ContactProps) => {
  return (
    <div className="contact">
      <a href={props.href} target="_blank">
        <img src={props.url} alt={props.name} title={props.name} />
      </a>
      <span className="contact__title">{props.title}</span>
      <span>{props.description}</span>
    </div>
  );
};
