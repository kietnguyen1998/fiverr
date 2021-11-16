import { createBrowserHistory } from "history";
import HomeTemplate from "./templates/HomeTemplate";

import React, { useEffect } from "react";
import Home from "./View/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AuthRoute, PrivateRoute } from "./HOC/Route";
// import { fetchMe } from "./store/action/ManageUserAction";
import Signup from "./View/Signup";
import Signin from "./View/Signin";
import { useDispatch } from "react-redux";
// import ManageCategory from "./View/ManageCategory/ManageCategory";
import ManageUser from "./View/Admin/ManageUser/ManageUser";
import ManageService from "./View/Admin/ManageService/ManageService";
import MainCategory from "./View/Admin/MainCategory/MainCategory";
import SubCategory from "./View/Admin/SubCategory/SubCategory";
import AdminTemplate from "./templates/LayoutAdmin/Layout.jsx";
import EditMainCategory from "./View/Admin/MainCategory/EditMainCategory";
import AddNewMainCategory from "./View/Admin/MainCategory/AddNewMainCategory";
import AddNewUser from "./View/Admin/ManageUser/AddNewUser"
import { UserTemplate } from "./templates/UserTemplete/UserTemplete";
import EditUser from "./View/Admin/ManageUser/EditUser";
import EditService from "./View/Admin/ManageService/EditService";
import AddNewService from "./View/Admin/ManageService/AddNewService";
import AddNewSubCategory from "./View/Admin/SubCategory/AddNewSubCategory";
import EditSubCategory from "./View/Admin/SubCategory/EditSubCategory";

export const history = createBrowserHistory();

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // const token = localStorage.getItem("token");
    // if (token) {
    //   dispatch(fetchMe);
    // }
  }, []);
  return (
    <BrowserRouter history={history}>
      <Switch>
        {/* <Route path="/detail/:id" component={Detail} /> */}
        <UserTemplate path="/signin" Component={Signin} redirectPath="/" />
        <AuthRoute path="/signup" component={Signup} redirectPath="/" />
        <HomeTemplate path="/" exact Component={Home} />

       
        <AdminTemplate
          path="/admin/maincategory"
          exact
          Component={MainCategory}
        />
        
        <AdminTemplate path="/admin/manageuser" exact Component={ManageUser} />
        <AdminTemplate path="/admin/manageservice" exact Component={ManageService} />
        <AdminTemplate path="/admin/manageservice/addnew" exact Component={AddNewService} />
        <AdminTemplate path="/admin/subcategory" exact Component={SubCategory} />
        <AdminTemplate path="/admin/maincategory/addnew" exact Component={AddNewMainCategory} />
        <AdminTemplate path="/admin/manageuser/addnew" exact Component={AddNewUser} />
        <AdminTemplate path="/admin/manageservice/edit/:id" exact Component={EditService} />
        <AdminTemplate path="/admin/maincategory/edit/:id" exact Component={EditMainCategory} />
        <AdminTemplate path="/admin/manageuser/edit/:id" exact Component={EditUser} />
        <AdminTemplate path="/admin/subcategory/edit/:id" exact Component={EditSubCategory} />
        <AdminTemplate path="/admin/subcategory/addnew" exact Component={AddNewSubCategory} />


      </Switch>
    </BrowserRouter>
  );
}

export default App;
