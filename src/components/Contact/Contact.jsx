import s from "./Contact.module.css";
const Contact = ({ name, number, onDelete }) => {
  return (
    <>
      <div className={s.contactList__text}>
        <p className={s.contactList__name}>{name}</p>
        <p className={s.contactList__number}>Tel: {number}</p>
      </div>
      <button className={s.contactList__deleteBtn} onClick={onDelete}>
        Delete
      </button>
    </>
  );
};

export default Contact;
