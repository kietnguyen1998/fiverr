import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
// import axios from "axios";
import {
  Avatar,
  Grid,
  Paper,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import { useHistory } from "react-router-dom";
const schema = yup.object().shape({
  taiKhoan: yup.string().required("Tên tài khoản bắt buộc nhập "),
  matKhau: yup.string().required("Mật khẩu bắt buộc nhập"),
  hoTen: yup.string().required("Họ tên bắt buộc nhập"),
  email: yup
    .string()
    .required("Email bắt buộc nhập")
    .email("Email không hợp lệ"),
  soDt: yup
    .string()
    .required("Số DT bắt buộc nhập")
    .matches(/^[0-9]+$/g, "Điện thoại phải là số"),
});
const Signup = () => {
  let history = useHistory();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "GP01",
      hoTen: "",
    },
    validationSchema: schema,
    validateOnMount: true,
  });
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   formik.setTouched({
  //     taiKhoan: true,
  //     email: true,
  //     soDt: true,
  //     matKhau: true,
  //     hoten: true,
  //   });
  //   if (!formik.isValid) return;
  //   try {
  //     const res = await axios({
  //       url: "http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/DangKy",
  //       method: "POST",
  //       data: formik.values,
  //     });
  //     alert("Đăng kí thành công");
  //     history.push("/signin");
  //   } catch (err) {
  //     console.error(err.response);
  //     alert(err.response.data.content);
  //   }
  // };
  const paperStyle = { padding: 20, width: 300, margin: "0 auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const marginTop = { marginTop: 5 };
  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account !
          </Typography>
        </Grid>
        {/* <form onSubmit={handleSubmit}> */}
        <form>
          <TextField
            fullWidth
            name="taiKhoan"
            label="Tài khoản"
            variant="outlined"
            onChange={formik.handleChange}
            style={marginTop}
          />
          {formik.touched.taiKhoan && (
            <Typography color="error">{formik.errors.taiKhoan}</Typography>
          )}
          <TextField
            fullWidth
            name="matKhau"
            type="password"
            label="Mật khẩu"
            variant="outlined"
            onChange={formik.handleChange}
            style={marginTop}
          />
          {formik.touched.matKhau && (
            <Typography color="error">{formik.errors.matKhau}</Typography>
          )}
          <TextField
            name="hoTen"
            fullWidth
            label="Họ Tên"
            variant="outlined"
            onChange={formik.handleChange}
            style={marginTop}
          />
          {formik.touched.hoTen && (
            <Typography color="error">{formik.errors.hoTen}</Typography>
          )}
          <TextField
            fullWidth
            name="email"
            fullWidth
            label="Email"
            variant="outlined"
            onChange={formik.handleChange}
            style={marginTop}
          />
          {formik.touched.email && (
            <Typography color="error">{formik.errors.email}</Typography>
          )}
          <TextField
            fullWidth
            name="soDt"
            label="Số ĐT"
            variant="outlined"
            onChange={formik.handleChange}
            style={marginTop}
          />
          {formik.touched.soDt && (
            <Typography color="error">{formik.errors.soDt}</Typography>
          )}

          <Button
            style={marginTop}
            type="submit"
            variant="contained"
            color="primary"
          >
            Sign up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Signup;
