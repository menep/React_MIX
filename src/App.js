import React, { Component } from "react";
import Links from "./containers/Links/Links";
import Rqm from "./containers/Rqm/Rqm";
import Notes from "./containers/Notes/Notes";
import Pomodoro from "./containers/Pomodoro/Pomodoro";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Route path="/" exact component={Links} />
        <Route path="/notes" component={Notes} />
        <Route path="/random-quote-machine" component={Rqm} />
        <Route path="/pomodoro" component={Pomodoro} />
      </React.Fragment>
    );
  }
}

export default App;
