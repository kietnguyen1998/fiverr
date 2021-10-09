import axios from "axios";
import { actionType } from "./type";
import { createAction } from ".";
export const SignIn = (userLogin, callback) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        url: "http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/DangNhap",
        method: "POST",
        data: userLogin,
      });
      dispatch(createAction(actionType.SET_SIGN_IN, res.data));
      localStorage.setItem("t", res.data.content.accessToken);

      callback();
    } catch (err) {
      alert(err.response.data.content);
    }
  };
};
export const fetchMe = async (dispatch) => {
  try {
    const res = await axios({
      method: "POST",
      url: "http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("t"),
      },
    });
    dispatch(createAction(actionType.SET_SIGN_IN, res.data));
  } catch (err) {
    console.log(err);
  }
};
