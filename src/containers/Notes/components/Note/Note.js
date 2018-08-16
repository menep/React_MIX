import React from "react";
import css from "./Note.css";

const note = props => (
  <div className={css.container}>
    <textarea
      className={css.textArea}
      value={props.value}
      onChange={props.change}
    />
    <div className={css.btnContainer}>
      <button className={css.button} onClick={props.clicked}>
        Save
      </button>
    </div>
  </div>
);

export default note;
