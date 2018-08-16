import React, { Component } from "react";
import css from "./Rqm.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "../../components/Footer/Footer";

class Rqm extends Component {
  render() {
    const footerNote = (
      <p>
        Quotes by
        <a style={{color: 'inherit'}}
          href="https://talaikis.com/random_quotes_api/"
        >
          Tadas Talaikis
        </a>
      </p>
    );

    return (
      <div className={css.Rqm}>
        <Header />
        <Main />
        <Footer footerNote={footerNote} />
      </div>
    );
  }
}

export default Rqm;
