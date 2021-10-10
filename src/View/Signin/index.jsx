import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { SignIn } from "../../store/action/signIn";
import {
  Avatar,
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { NavLink } from "react-router-dom";

const schema = yup.object().shape({
  email: yup.string().required("Tên tài khoản bắt buộc nhập "),
  password: yup.string().required("Mật khẩu bắt buộc nhập"),
});
const Signin = (props) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validateOnMount: true,
    validationSchema: schema,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    formik.setTouched({
      email: true,
      password: true,
    });
    if (!formik.isValid) return;
    dispatch(
      SignIn(formik.values, () => {
        props.history.push("/");
      })
    );
  };
  const paperStyle = {
    padding: 20,
    height: "57vh",
    width: 300,
    margin: "0 auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "18px 0" };
  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            name="email"
            label="Email"
            variant="outlined"
            onChange={formik.handleChange}
          />
          {formik.touched.email && (
            <Typography color="error">{formik.errors.email}</Typography>
          )}
          <TextField
            fullWidth
            name="password"
            type="password"
            label="Password"
            variant="outlined"
            onChange={formik.handleChange}
            style={{ marginTop: 10 }}
          />
          {formik.touched.password && (
            <Typography color="error">{formik.errors.password}</Typography>
          )}

          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={btnstyle}
          >
            Sign in
          </Button>
          <Typography>Don't have account?</Typography>
          <NavLink to="/signup">
            <Button variant="outlined" color="primary">
              Sign Up
            </Button>
          </NavLink>
        </form>
      </Paper>
    </Grid>
  );
};

export default Signin;
