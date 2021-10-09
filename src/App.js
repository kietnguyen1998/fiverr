// import { Router, Switch, Route } from "react-router-dom";
// import Home from "./View/Home";

// import { createBrowserHistory } from "history";
import HomeTemplate from "./templates/HomeTemplate";
// export const history = createBrowserHistory("./HOCs/Layout");

// function App() {
//   return (
//     <Router history={history}>
//       <Switch>
//         <HomeTemplate path="/home" exact Component={Home} />

//         <HomeTemplate path="/" exact Component={Home} />
//       </Switch>
//     </Router>
//   );
// }

// export default App;

import React, { useEffect } from "react";
import Home from "./View/Home";
// import Detail from "./views/Detail";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AuthRoute, PrivateRoute } from "./HOC/Route";
import { fetchMe } from "./store/action/signIn";
import Signup from "./View/Signup";
import Signin from "./View/Signin";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("t");
    if (token) {
      dispatch(fetchMe);
    }
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/detail/:id" component={Detail} /> */}
        <AuthRoute path="/signin" component={Signin} redirectPath="/" />
        <AuthRoute path="/signup" component={Signup} redirectPath="/" />
        <HomeTemplate path="/" exact Component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
