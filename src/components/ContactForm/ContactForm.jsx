import s from "./ContactForm.module.css";
import { useState } from "react";
import PropTypes from "prop-types";

export default function ContactForm({ onAdd }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd({ name, number });
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label className={s.form__label}>
        Name
        <input
          className={s.form__input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        ></input>
      </label>
      <label className={s.form__label}>
        Number
        <input
          className={s.form__input}
          type="text"
          value={number}
          name="number"
          onChange={handleChange}
        ></input>
      </label>
      <button className={s.form__btn} type="submit">
        Add
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  onAdd: PropTypes.func,
};
