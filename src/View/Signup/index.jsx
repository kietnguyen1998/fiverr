import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { format } from "date-fns";
import useStyle from "./style";

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
  first_name: yup.string().required("First name is required"),
  last_name: yup.string().required("Last name is required"),
  email: yup.string().required("Email is required").email("Email is invalid"),
  phone: yup
    .string()
    .required("Phone is requied")
    .matches(/^[0-9]+$/g, "Phone must be number"),
  password: yup.string().required("Password is required"),
  certification: yup.string().required("Password is required"),
  birthday: yup.string().required("Password is required"),
});
const Signup = () => {
  let history = useHistory();
  const classes = useStyle();
  const { container, formControl } = classes;
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      password: "",
      certification: [],
      gender: true,
      skill: [],
      type: "ADMIN",
      birthday: new Date(),
    },
    // validationSchema: schema,
    // validateOnMount: true,
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    formik.setTouched({
      taiKhoan: true,
      email: true,
      soDt: true,
      matKhau: true,
      hoten: true,
    });
    if (!formik.isValid) return;
    const newUser = {
      ...formik.values,
      birthday: format(formik.values.birthday, "dd/MM/yyyy"),
    };

    console.log(newUser);

    const formData = new FormData();

    for (let key in newUser) {
      formData.append(key, newUser[key]);
    }

    try {
      const res = await axios({
        method: "POST",
        url: "https://fiverr.cybersoft.edu.vn/api/auth/signup",
        data: formData,
        headers: {
          tokenByClass:
            "Bearer " +
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAwOSIsIkhldEhhblN0cmluZyI6IjI3LzAxLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY0MzI0MTYwMDAwMCIsIm5iZiI6MTYxNjM0NjAwMCwiZXhwIjoxNjQzMzg5MjAwfQ.NEQRF8SKORq7R7kYbYCCO9ZZXYxTWlbaTc2wxXWMfiw",
        },
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  const paperStyle = { padding: 20, width: 300, margin: "0 auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const marginTop = { marginTop: 5 };
  const handleChangeDate = (date) => {
    formik.setFieldValue("birthday", date);
  };
  const handleChangeSwitch = (e) => {
    formik.setFieldValue(e.target.name, e.target.checked);
  };
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
            name="first_name"
            label="First name"
            variant="outlined"
            onChange={formik.handleChange}
            style={marginTop}
          />
          {formik.touched.first_name && (
            <Typography color="error">{formik.errors.first_name}</Typography>
          )}
          <TextField
            fullWidth
            name="last_name"
            label="Last name"
            variant="outlined"
            onChange={formik.handleChange}
            style={marginTop}
          />
          {formik.touched.last_name && (
            <Typography color="error">{formik.errors.last_name}</Typography>
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
            name="password"
            type="password"
            label="Mật khẩu"
            variant="outlined"
            onChange={formik.handleChange}
            style={marginTop}
          />
          {formik.touched.password && (
            <Typography color="error">{formik.errors.password}</Typography>
          )}
          <TextField
            fullWidth
            name="phone"
            label="Phone"
            variant="outlined"
            onChange={formik.handleChange}
            style={marginTop}
          />
          {formik.touched.phone && (
            <Typography color="error">{formik.errors.phone}</Typography>
          )}
          <TextField
            fullWidth
            name="skill"
            label="Skill"
            variant="outlined"
            onChange={formik.handleChange}
            style={marginTop}
          />
          {formik.touched.skill && (
            <Typography color="error">{formik.errors.skill}</Typography>
          )}
          <TextField
            fullWidth
            name="certification"
            label="Certifiction"
            variant="outlined"
            onChange={formik.handleChange}
            style={marginTop}
          />
          {formik.touched.certification && (
            <Typography color="error">{formik.errors.certification}</Typography>
          )}
          <MuiPickersUtilsProvider className={formControl} utils={DateFnsUtils}>
            <KeyboardDatePicker
              fullWidth
              disableToolbar
              variant="inline"
              inputVariant="outlined"
              format="MM/dd/yyyy"
              value={formik.values.birthday}
              onChange={handleChangeDate}
              label="Birthday"
            />
          </MuiPickersUtilsProvider>
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
