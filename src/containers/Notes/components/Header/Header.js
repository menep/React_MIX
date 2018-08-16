import React from "react";

const navbar = props => {
  const style = {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "orange",
      height: "6rem",
      width: "100%",
      position: "fixed",
      top: 0,
      left: 0,
    },
    heading: {
      fontSize: '3.5rem',
      fontWeight: '200'
    }
  };

  return (
    <nav style={style.container}>
      <h2 style={style.heading}>React Notes</h2>
    </nav>
  );
};

export default navbar;
