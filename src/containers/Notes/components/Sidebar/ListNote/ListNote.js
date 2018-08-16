import React from "react";
import css from './ListNote.css'

const listNote = props => {

  const content = () => {
    return props.noteContent.length > 20
      ? props.noteContent.slice(0, 19) + "..."
      : props.noteContent;
  };

  return (
    <div className={css.container}>
      <li onClick={props.clicked} id={props.id} className={css.note}>
        {content()}
      </li>
      <button className={css.deleteBtn} onClick={props.delete} id={props.id}>
        X
      </button>
    </div>
  );
};

export default listNote;
