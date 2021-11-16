import axios from "axios";
import { DOMAIN, TOKEN, TOKENBYCLASS } from "../../util/settings/config";
import { createAction } from ".";
import { actionType } from "./type";
import { history } from "../../App";

export const getMainCategory = () => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "GET",
        url: `${DOMAIN}/api/type-jobs/pagination`,
        headers: {
          tokenByClass: TOKENBYCLASS,
        },
      });
      dispatch(createAction(actionType.GET_MAIN_CATEGORY, res.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteMainCategory = (mainCategoryId) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        url: `${DOMAIN}/api/type-jobs/${mainCategoryId}`,
        method: "DELETE",
        headers: {
          token: "Bearer " + localStorage.getItem(TOKEN),
          tokenByClass: TOKENBYCLASS,
        },
      });

      alert("Delete Main Category Successfully !!");
      dispatch(getMainCategory());
      history.push("/admin/maincategory");

    } catch (err) {
      console.log(err);
    }
  };
};

export const addNewMainCategoryAction = (formData) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `${DOMAIN}/api/type-jobs`,
        method: "POST",
        data: formData,
        headers: {
          token: "Bearer " + localStorage.getItem(TOKEN),
          tokenByClass: TOKENBYCLASS,
        },
      });
      alert("Add New Main Category Successfully");
      dispatch(getMainCategory());
      history.push("/admin/maincategory");
    } catch (errors) {
      console.log(errors.response?.data);
    }
  };
};

export const editMainCategoryAction = (mainCategoryId, formData) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `${DOMAIN}/api/type-jobs/${mainCategoryId}`,
        method: "PUT",
        data: formData,
        headers: {
          token: "Bearer " + localStorage.getItem(TOKEN),
          tokenByClass: TOKENBYCLASS,
        },
      });
      alert("Update Main Category Successfully");

      dispatch(getMainCategory());
      history.push("/admin/maincategory");
    } catch (errors) {
      console.log(errors.response?.data);
    }
  };
};
