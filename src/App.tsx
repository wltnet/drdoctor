import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./styles";
import Header from "./components/Header";
import Login from "./pages/Login";
import OneTimeCode from "./pages/OneTimeCode";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/onetimecode" component={OneTimeCode} />
          <Route path="/welcome" component={Welcome} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
