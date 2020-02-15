import React from "react";
import styles from "./Textbox.module.scss";

const Textbox = props => {
  const {
    type = 'text',
    labelText,
    direction = "row",
    handleChange,
    handleBlur,
    value,
    name,
    error,
    touched
  } = props;

  const containerStyle =
    direction === "row" ? styles.rowContainer : styles.columnContainer;

  return (
    <div className={containerStyle}>
      <label className={styles.label} htmlFor={name}>
        {labelText}
      </label>
      <input
        className={styles.textbox}
        type={type}
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
      />
      {error && touched && <span className={styles.message}>{error}</span>}
    </div>
  );
};

export default Textbox;
