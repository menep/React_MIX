import React from "react";
import Button from "../../Button/Button";

const inputContainer = props => {
  const style = {
    textArea: {
      resize: "none",
      height: "80%",
      width: "100%",
      overflow: "scroll",
      marginBottom: "3rem",
      boxSizing: "border-box",
      fontSize: "1.5rem",
      lineHeight: "2.5rem",
      padding: "1rem",
      border: "none"
    }
  };

  return (
    <React.Fragment>
      <textarea
        style={style.textArea}
        value={props.value}
        onChange={props.change}
      />
      <div style={{ height: "10rem" }}>
        <Button clicked={props.clicked} />
      </div>
    </React.Fragment>
  );
};

export default inputContainer;
