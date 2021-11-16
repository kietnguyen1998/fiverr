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
import { addSubCategoryAction } from "../../../store/action/SubCategoryAction";

const AddNewSubCategory = () => {
  const componentSize = "large";
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      status: true,
      typeJob: "",
    },
    onSubmit: (values) => {
      console.log("values", values);
      dispatch(addSubCategoryAction(values));
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
        <h3 className="text-2xl text-center">Add Sub Category</h3>
        <Form.Item label="Name">
          <Input name="name" onChange={formik.handleChange} />
        </Form.Item>

        <Form.Item label="Status">
          <Switch defaultChecked onChange={handleChangeSwitch("status")} />
        </Form.Item>
        <Form.Item label="Type Job">
          <Input name="typeJob" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Action">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add Sub Category
          </button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddNewSubCategory;
