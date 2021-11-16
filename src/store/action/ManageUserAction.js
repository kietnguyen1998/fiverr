import { manageUserService } from "../../services/ManageUserService";
import { createAction } from ".";
import { actionType } from "./type";
import { history } from "../../App";
import { getMainCategory } from "./MainCategoryAction";
import { DOMAIN, TOKEN, TOKENBYCLASS } from "../../util/settings/config";
import axios from "axios";
export const signInAction = (userLogin) => {
  return async (dispatch) => {
    try {
      console.log(userLogin);
      const result = await axios({
        url: `${DOMAIN}/api/auth/signin`,
        method: "POST",
        data: userLogin,
        headers: {
          tokenByClass: TOKENBYCLASS,
        },
      });

      dispatch(createAction(actionType.SET_SIGN_IN, result.data));
      //Chuyển hướng đăng nhập về trang trước đó
      history.goBack();
      console.log("result", result);
    } catch (error) {
      console.log("error", error.response.data);
    }
  };
};

export const getUserList = async (dispatch) => {
  try {
    const result = await axios({
      url: `${DOMAIN}/api/users`,
      method: "GET",

      headers: {
        token: localStorage.getItem(TOKEN),
        tokenByClass: TOKENBYCLASS,
      },
    });

    dispatch(createAction(actionType.GET_USER_LIST, result.data));
  } catch (error) {
    console.log("error", error.response?.data);
  }
};
export const searchUserAction = (name, skip = 0, limit = 3) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `${DOMAIN}/api/users/pagination-search`,
        method: "GET",
        params: {
          skip: skip,
          limit: limit,
          name: name,
        },
        headers: {
          token: localStorage.getItem(TOKEN),
          tokenByClass: TOKENBYCLASS,
        },
      });
      dispatch(createAction(actionType.GET_USER_LIST, result.data));

    } catch (error) {
      console.log("error", error.response?.data);
    }
  };
};
export const deleteUserAction = (id) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `${DOMAIN}/api/users`,
        method: "DELETE",

        headers: {
          token: localStorage.getItem(TOKEN),
          tokenByClass: TOKENBYCLASS,
        },
      });
      alert("Delete User Successfully !");
      dispatch(getUserList);
      history.push("/admin/manageuser");
    } catch (errors) {
      console.log("errors", errors.response?.data);
    }
  };
};

export const AddNewUserAction = (formData) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `${DOMAIN}/api/users`,
        method: "POST",
        data: formData,
        headers: {
          token: localStorage.getItem(TOKEN),
          tokenByClass: TOKENBYCLASS,
        },
      });
      alert("ADD New User Successfully");
      dispatch(createAction(actionType.ADD_NEW_USER, result.data));
      dispatch(getUserList);
      history.push("/admin/manageuser");
    } catch (errors) {
      console.log("errors", errors.response?.data);
    }
  };
};

export const EditUserAction = (id, formData) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `${DOMAIN}/api/users/${id}`,
        method: "PUT",
        data: formData,
        headers: {
          token: localStorage.getItem(TOKEN),
          tokenByClass: TOKENBYCLASS,
        },
      });
      alert("Edit User Successfully");
      dispatch(getUserList);
      history.push("/admin/manageuser");
    } catch (errors) {
      console.log("errors", errors.response?.data);
    }
  };
};
