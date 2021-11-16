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
import { useDispatch } from "react-redux";
import _ from "lodash";
import { addNewMainCategoryAction } from "../../../store/action/MainCategoryAction";

const AddNewMainCategory = () => {
  const componentSize = "large";
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      status: true,
    },
    onSubmit: (values) => {
      console.log("values", values);
      dispatch(addNewMainCategoryAction(values));
    },
  });

  const handleChangeSwitch = (name) => {
    return (value) => {
      console.log(name, value);
      formik.setFieldValue(name, value);
    };
  };

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
        <h3 className="text-2xl text-center">Add Main Category</h3>
        <Form.Item label="Name" name="name" rules={[
            {
              required: true,
              message: "Please input Name Category!",
            },
          ]}>
          <Input name="name" onChange={formik.handleChange} />
        </Form.Item>

        <Form.Item label="Status">
          <Switch defaultChecked onChange={handleChangeSwitch("status")} />
        </Form.Item>

        <Form.Item label="Action">
          <button type="submit" className="bg-blue-300 text-white p-2">
            Add Main Category
          </button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddNewMainCategory;
