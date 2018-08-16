import React, { Component } from "react";
import css from "./Notes.css";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "../../components/Footer/Footer";

class Notes extends Component {
  render() {
    return (
      <div className={css.Notes}>
        <div>
          <Header />
          <Content />
        </div>

        <Footer footerNote="A project by MP" />
      </div>
    );
  }
}

export default Notes;
