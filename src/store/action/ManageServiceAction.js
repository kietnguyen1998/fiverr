import axios from "axios";
import { DOMAIN, TOKEN, TOKENBYCLASS } from "../../util/settings/config";
import { createAction } from ".";
import { actionType } from "./type";
import { history } from "../../App";

export const getServiceListAction = async (dispatch) => {
  try {
    const res = await axios({
      method: "GET",
      url: `${DOMAIN}/api/jobs`,

      headers: {
        tokenByClass: TOKENBYCLASS,
      },
    });
    dispatch(createAction(actionType.GET_SERVICE_LIST, res.data));
  } catch (err) {
    console.log(err);
  }
};

export const deleteServiceAction = (serviceId) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        url: `${DOMAIN}/api/jobs/${serviceId}`,
        method: "DELETE",
        headers: {
          token: "Bearer " + localStorage.getItem(TOKEN),
          tokenByClass: TOKENBYCLASS,
        },
      });

      alert("Delete Service Successfully!!");
      dispatch(getServiceListAction);
      history.push("/admin/manageservice");
    } catch (err) {
      console.log(err);
    }
  };
};

export const addServiceAction = (formData) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `${DOMAIN}/api/jobs`,
        method: "POST",
        data: formData,
        headers: {
          token: "Bearer " + localStorage.getItem(TOKEN),
          tokenByClass: TOKENBYCLASS,
        },
      });
      alert("Add New Service Successfully");

      dispatch(getServiceListAction);
      history.push("/admin/manageservice");
    } catch (errors) {
      console.log(errors.response?.data);
    }
  };
};

export const updateServiceAction = (serviceId, formData) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `${DOMAIN}/api/jobs/${serviceId}`,
        method: "PUT",
        data: formData,
        headers: {
          token: "Bearer " + localStorage.getItem(TOKEN),
          tokenByClass: TOKENBYCLASS,
        },
      });
      alert("Update Service Successfully");

      dispatch(getServiceListAction);
      history.push("/admin/manageservice");
    } catch (errors) {
      console.log(errors.response?.data);
    }
  };
};
