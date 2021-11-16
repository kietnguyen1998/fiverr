import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from "antd";
import { useFormik } from "formik";
import moment from "moment";
import { useDispatch } from "react-redux";
import _ from "lodash";
import { AddNewUserAction } from "../../../store/action/ManageUserAction";

const AddNewUser = () => {
  const componentSize = "large";
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      birthday: "",
      gender: true,
      role: "ADMIN",
      skill: [],
      certification: [],
    },
    onSubmit: (values) => {
      values = {
        ...values,
        certification:
          values.certification == "" ? [] : values.certification?.split(","),
        skill: values.skill == "" ? [] : values.skill?.split(","),
      };
      dispatch(AddNewUserAction(values));
    },
  });

  const handleChangeDatePicker = (value) => {
    let birthday = moment(value).format("YYYY//MM/DD");
    formik.setFieldValue("birthday", birthday);
  };

  const handleChangeSwitch = (name) => {
    return (value) => {
      console.log(name, value);
      formik.setFieldValue(name, value);
    };
  };

  const { Option } = Select;

  return (
    <>
      <Form
        onSubmitCapture={formik.handleSubmit}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        size={componentSize}
      >
        <h3 className="text-2xl text-center">Add New User</h3>
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your Name!",
            },
          ]}
        >
          <Input name="name" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
            },
          ]}
        >
          <Input name="email" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input name="password" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Phone">
          <Input name="phone" onChange={formik.handleChange} />
        </Form.Item>

        <Form.Item label="Birthday">
          <DatePicker format={"YYYY/MM/DD"} onChange={handleChangeDatePicker} />
        </Form.Item>

        <Form.Item label="Gender Male">
          <Switch defaultChecked onChange={handleChangeSwitch("gender")} />
        </Form.Item>
        <Form.Item label="Role">
          <Select
            defaultValue="ADMIN"
            name="role"
            style={{ width: 120 }}
            onChange={formik.handleChange}
          >
            <Option value="ADMIN">ADMIN</Option>
            <Option value="CLIENT">CLIENT</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Certification">
          <Input name="certification" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Skill">
          <Input name="skill" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Action">
          <button type="submit" className="bg-blue-300 text-white p-2">
            Add New User
          </button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddNewUser;
