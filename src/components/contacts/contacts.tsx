import { Contact } from "./components/contact";
import "./contacts.scss";

export const Contacts = () => {
  return (
    <div className="contacts">
      <Contact
        title="Nome"
        url="/assets/contacts/name.svg"
        name="E-mail"
        description="Jonas Chagas"
      />
      <Contact
        title="E-mail"
        url="/assets/contacts/email.svg"
        name="E-mail"
        description="jonaschagasweb@gmail.com"
      />
      <Contact
        title="Linkedin"
        url="/assets/contacts/linkedin.svg"
        href="https://linkedin.com/in/jonas-chagas"
        name="Linkedin"
        description="jonas-chagas"
      />
      <Contact
        title="Instagram"
        url="/assets/contacts/instagram.svg"
        href="https://instagram.com/jonnaschagas"
        name="Instagram"
        description="@jonnaschagas"
      />
    </div>
  );
};
