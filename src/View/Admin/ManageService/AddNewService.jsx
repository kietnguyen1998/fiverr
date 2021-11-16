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
import { addServiceAction } from "../../../store/action/ManageServiceAction";

const AddNewService = () => {
  const componentSize = "large";
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      rating: 10,
      price: 1000,
      proServices: true,
      localSellers: true,
      onlineSellers: true,
      deliveryTime: true,
      type: "",
      subType: "",
    },
    onSubmit: (values) => {
      console.log("values", values);
      dispatch(addServiceAction(values));
    },
  });
  const handleChangeInputNumber = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };
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
        <h3 className="text-2xl text-center">Add New Service</h3>
        <Form.Item label="Name" name="name" rules={[
            {
              required: true,
              message: "Please input name service!",
            },
          ]}>
          <Input name="name" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Rating">
          <InputNumber
            onChange={handleChangeInputNumber("rating")}
            min={1}
            max={10}
          />
        </Form.Item>
        <Form.Item label="Price">
          <InputNumber onChange={handleChangeInputNumber("price")} />
        </Form.Item>
        <Form.Item label="Pro Services">
          <Switch defaultChecked onChange={handleChangeSwitch("proServices")} />
        </Form.Item>
        <Form.Item label="Local Sellers">
          <Switch
            defaultChecked
            onChange={handleChangeSwitch("localSellers")}
          />
        </Form.Item>
        <Form.Item label="Online Sellers">
          <Switch
            defaultChecked
            onChange={handleChangeSwitch("onlineSellers")}
          />
        </Form.Item>
        <Form.Item label="Delivery Time">
          <Switch
            defaultChecked
            onChange={handleChangeSwitch("deliveryTime")}
          />
        </Form.Item>
        <Form.Item label="Type">
          <Input name="type" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Sub Type">
          <Input name="subType" onChange={formik.handleChange} />
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

export default AddNewService;
