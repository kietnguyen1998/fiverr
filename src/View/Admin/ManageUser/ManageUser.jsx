

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
import { deleteUserAction, getUserList, searchUserAction } from "../../../store/action/ManageUserAction";
const { Search } = Input;

export default function ManageUser(props) {
  let {userList} = useSelector((state) => {
    return state.manageUserReducer;
  });

  const dispatch = useDispatch();

  console.log("userList", userList);

  useEffect(() => {
    dispatch(getUserList);
  }, []);

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
      title: "Email",
      dataIndex: "email",

      
      
      width: "25%",
    },
    {
      title: "Action",
      dataIndex: "_id",
      render: (text, user) => {
        return (
          <Fragment>
            <NavLink
              key={1}
              className=" mr-2  text-2xl"
              to={`/admin/manageuser/edit/${user._id}`}
            >
              <EditOutlined style={{ color: "blue" }} />{" "}
            </NavLink>
            <span
              style={{ cursor: "pointer" }}
              key={2}
              className="text-2xl"
              onClick={() => {
                if (
                  window.confirm("Are you sure to delete user " + user.name)
                ) {
                    dispatch(deleteUserAction(user._id));
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
  const data = userList;

    const onSearch = value => {

      console.log(value);
      dispatch(searchUserAction(value));

  };

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  return (
    <div>
      <h3 className="text-4xl">Manage User</h3>
      <Button
        type="primary"
        shape="round"
        className="mb-5"
        onClick={() => {
          props.history.push("/admin/manageuser/addnew");
        }}
      >
        Add New User{" "}
      </Button>
      <Search
                className="mb-5"
                placeholder="input search text"
                enterButton={<SearchOutlined />}
                size="large"

                onSearch={onSearch}
            />

      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        rowKey={"_id"}
      />
    </div>
  );
}
