import React, { Component } from "react";
import Links from "./containers/Links/Links";
import Rqm from "./containers/Rqm/Rqm";
import Notes from "./containers/Notes/Notes";
import Pomodoro from "./containers/Pomodoro/Pomodoro";
import { Route } from "react-router-dom";
import css from './App.css'

class App extends Component {
  render() {
    return (
      <div className={css.App}>
        <Route path="/" exact component={Links} />
        <Route path="/notes" component={Notes} />
        <Route path="/random-quote-machine" component={Rqm} />
        <Route path="/pomodoro" component={Pomodoro} />
      </div>
    );
  }
}

export default App;
