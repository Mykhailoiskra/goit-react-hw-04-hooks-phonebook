import s from "./Filter.module.css";
import PropTypes from "prop-types";
const Filter = ({ value, onChange }) => {
  return (
    <label className={s.filter}>
      Find a contact
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={s.filter__input}
      ></input>
    </label>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
