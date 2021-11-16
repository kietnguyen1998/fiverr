import axios from "axios";
import { DOMAIN, TOKEN, TOKENBYCLASS } from "../../util/settings/config";
import { createAction } from ".";
import { actionType } from "./type";
import {history} from '../../App'

export const getSubCategory = async (dispatch) => {
  
    try {
      const res = await axios({
        method: "GET",
        url: `${DOMAIN}/api/sub-type-jobs`,
       
        headers: {
          tokenByClass: TOKENBYCLASS,
        },
      });
      dispatch(createAction(actionType.GET_SUB_CATEGORY, res.data));
    } catch (err) {
      console.log(err);
    }
  
};


export const deleteSubCategory = (subCategoryId) => {
    return async (dispatch) => {
      try {
        const res = await axios({
          url: `${DOMAIN}/api/sub-type-jobs/${subCategoryId}`,
          method: "DELETE",
          headers: {
            token: "Bearer " + localStorage.getItem(TOKEN),
            tokenByClass: TOKENBYCLASS,
          },
        });
  
        alert("Delete Sub Category Successfully !!");
        dispatch(getSubCategory);
        history.push("/admin/subcategory");
      } catch (err) {
        console.log(err);
      }
    };
  };
  
  export const addSubCategoryAction = (formData) => {
    return async (dispatch) => {
      try {
        const result = await axios({
          url: `${DOMAIN}/api/sub-type-jobs`,
          method: "POST",
          data: formData,
          headers: {
            token: "Bearer " + localStorage.getItem(TOKEN),
            tokenByClass: TOKENBYCLASS,
          },
        });
        alert("Add New Sub Category Successfully");
        dispatch(getSubCategory);
        history.push("/admin/subcategory");
      } catch (errors) {
        console.log(errors.response?.data);
      }
    };
  };
  
  export const editSubCategoryAction = (subCategoryId, formData) => {
    return async (dispatch) => {
      try {
        const result = await axios({
          url: `${DOMAIN}/api/sub-type-jobs/${subCategoryId}`,
          method: "PUT",
          data: formData,
          headers: {
            token: "Bearer " + localStorage.getItem(TOKEN),
            tokenByClass: TOKENBYCLASS,
          },
        });
        alert("Update Sub Category Successfully");
  
        dispatch(getSubCategory);
        history.push("/admin/subcategory");
      } catch (errors) {
        console.log(errors.response?.data);
      }
    };
  };
  