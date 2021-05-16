import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import CompanyHome from "./CompanyHome";
import College from "./products/College/Home";
import Page404 from "./Page404";

const App = () => (
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/College" component={College} />
        <Route exact path="/nTrigram" component={CompanyHome} />
        <Route path="/" component={Page404} />
      </Switch>
    </Router>
  </React.StrictMode>
);

export default App;
