import { Component } from "react";
import s from "./ContactForm.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onAdd(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name } = this.state;
    const { number } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={s.form}>
        <label className={s.form__label}>
          Name
          <input
            className={s.form__input}
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          ></input>
        </label>
        <label className={s.form__label}>
          Number
          <input
            className={s.form__input}
            type="text"
            value={number}
            name="number"
            onChange={this.handleChange}
          ></input>
        </label>
        <button className={s.form__btn} type="submit">
          Add
        </button>
      </form>
    );
  }
}

export default ContactForm;
