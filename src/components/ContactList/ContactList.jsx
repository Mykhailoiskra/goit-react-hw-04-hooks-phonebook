import s from "./ContactList.module.css";
import PropTypes from "prop-types";
import Contact from "../Contact/Contact.jsx";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={s.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.contactList__item}>
          <Contact
            name={name}
            number={number}
            onDelete={() => {
              onDeleteContact(id);
            }}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDeleteContact: PropTypes.func,
};
