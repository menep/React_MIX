import React from "react";
import css from "./Links.css";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

const links = props => (
  <div className={css.container}>
    <div className={css.container__links}>
      <Link to="/random-quote-machine" className={css.link__rqm}>
        Random Quote Machine
      </Link>
      <Link to="/notes" className={css.link__notes}>
        Notes
      </Link>
      <Link to="/pomodoro" className={css.link__pomodoro}>
        Pomodoro
      </Link>
    </div>
    <Footer footerNote="A project by Menep" />
  </div>
);

export default links;
