import { Router, Switch, Route } from "react-router-dom";
import Home from "./View/Home";

import { createBrowserHistory } from "history";
import HomeTemplate from "./templates/HomeTemplate";
export const history = createBrowserHistory("./HOCs/Layout");

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path="/home" exact Component={Home} />

        <HomeTemplate path="/" exact Component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
