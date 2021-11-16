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
import { useDispatch } from "react-redux";
import _ from "lodash";
import { editMainCategoryAction } from "../../../store/action/MainCategoryAction";

const EditMainCategory = (props) => {
  const componentSize = "large";
  const dispatch = useDispatch();

  let { id } = props.match.params;

  const formik = useFormik({
    initialValues: {
      name: "",
      status: true,
      subTypeJobs: [],
    },
    onSubmit: (values) => {
      values = {
        ...values,
        subTypeJobs:
          values.subTypeJobs == "" ? [] : values.subTypeJobs?.split(","),
      };
      dispatch(editMainCategoryAction(id, values));
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
        <h3 className="text-2xl text-center">Edit Main Category</h3>
        <Form.Item label="Name">
          <Input name="name" onChange={formik.handleChange} />
        </Form.Item>

        <Form.Item label="Status">
          <Switch defaultChecked onChange={handleChangeSwitch("status")} />
        </Form.Item>

        <Form.Item label="SubTypeJobs">
          <Input name="subTypeJobs" onChange={formik.handleChange} />
        </Form.Item>

        <Form.Item label="Action">
          <button type="submit" className="bg-blue-300 text-white p-2">
            Edit Main Category
          </button>
        </Form.Item>
      </Form>
    </>
  );
};
export default EditMainCategory;
