import React, { Fragment, useEffect } from "react";
import { Button, Table } from "antd";

import { Input, Space } from "antd";
import {
  AudioOutlined,
  EditOutlined,
  SearchOutlined,
  DeleteOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { deleteServiceAction, getServiceListAction } from "../../../store/action/ManageServiceAction";

export default function ManageService(props) {
  const {serviceList} = useSelector((state) => {
    return state.serviceReducer;
  });

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getServiceListAction);
  }, [dispatch]);

  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
      width: "15%",
    },

    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => {
        let nameA = a.name.toLowerCase().trim();
        let nameB = b.name.toLowerCase().trim();
        if (nameA > nameB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend", "ascend"],
      width: "25%",
    },
    {
      title: "Price",
      dataIndex: "price",
      width: "15%",
    },
    {
      title: "Rating",
      dataIndex: "rating",
      width: "15%",
    },
    {
      title: "Action",
      dataIndex: "_id",
      render: (text, service) => {
        return (
          <Fragment>
            <NavLink
              key={1}
              className=" mr-2  text-2xl"
              to={`/admin/manageservice/edit/${service._id}`}
            >
              <EditOutlined style={{ color: "blue" }} />{" "}
            </NavLink>
            <span
              style={{ cursor: "pointer" }}
              key={2}
              className="text-2xl"
              onClick={() => {
                if (
                  window.confirm("Are you sure to delete " + service.name)
                ) {
                    dispatch(deleteServiceAction(service._id));
                }
              }}
            >
              <DeleteOutlined style={{ color: "red" }} />{" "}
            </span>
          </Fragment>
        );
      },
      sortDirections: ["descend", "ascend"],
      width: "25%",
    },
  ];
  const data = serviceList;

  

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  return (
    <div>
      <h3 className="text-4xl">Manage Service</h3>
      <Button
        type="primary"
        shape="round"
        className="mb-5"
        onClick={() => {
          props.history.push("/admin/manageservice/addnew");
        }}
      >
        Add New Service{" "}
      </Button>
    

      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        rowKey={"_id"}
      />
    </div>
  );
}
