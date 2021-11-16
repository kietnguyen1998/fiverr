import React, { useEffect, useState } from "react";
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
import { EditUserAction } from "../../../store/action/ManageUserAction";

const EditUser = (props) => {
  const componentSize = "large";
  const dispatch = useDispatch();

  let { id } = props.match.params;

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
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

      dispatch(EditUserAction(id, values));
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
        <h3 className="text-2xl text-center">Edit User</h3>
        <Form.Item label="Name">
          <Input name="name" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Email">
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
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Edit User
          </button>
        </Form.Item>
      </Form>
    </>
  );
};
export default EditUser;
