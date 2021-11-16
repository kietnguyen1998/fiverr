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
import { deleteMainCategory, getMainCategory } from "../../../store/action/MainCategoryAction";
import { NavLink } from "react-router-dom";
import { history } from "../../../App";
const { Search } = Input;

export default function MainCategory(props) {
  let mainCategoryList = useSelector((state) => {
    return state.categoryReducer?.mainCategoryList;
  });

  const dispatch = useDispatch();

  console.log("maincategoryList", mainCategoryList);

  useEffect(() => {
    dispatch(getMainCategory());
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
      title: "Sub Type Jobs",
      dataIndex: "subTypeJobs",

      render: (text, subTypeJob) => {
        return (
          <Fragment>
            {subTypeJob.subTypeJobs.toString().length > 60
              ? subTypeJob.subTypeJobs.toString().substr(0, 60) + "..."
              : subTypeJob.subTypeJobs.toString()}
          </Fragment>
        );
      },
      sortDirections: ["descend", "ascend"],
      width: "25%",
    },
    {
      title: "Action",
      dataIndex: "_id",
      render: (text, category) => {
        return (
          <Fragment>
            <NavLink
              key={1}
              className=" mr-2  text-2xl"
              to={`/admin/maincategory/edit/${category._id}`}
            >
              <EditOutlined style={{ color: "blue" }} />{" "}
            </NavLink>
            <span
              style={{ cursor: "pointer" }}
              key={2}
              className="text-2xl"
              onClick={() => {
                if (
                  window.confirm("Are you sure to delete " + category.name)
                ) {
                    dispatch(deleteMainCategory(category._id));
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
  const data = mainCategoryList;

 

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  return (
    <div>
      <h3 className="text-4xl">Manage Main Category</h3>
      <Button
        type="primary"
        shape="round"
        className="mb-5"
        onClick={() => {
          props.history.push("/admin/maincategory/addnew");
        }}
      >
        Add New Category{" "}
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
