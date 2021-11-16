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
import { deleteSubCategory, getSubCategory } from "../../../store/action/SubCategoryAction";

const SubCategory = (props) => {
  let {subCategoryList} = useSelector((state) => {
    return state.categoryReducer;
  });

  const dispatch = useDispatch();

  console.log("subcategoryList", subCategoryList);

  useEffect(() => {
    dispatch(getSubCategory);
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
      title: "Status",
      dataIndex: "status",
      width: "15%",
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
              to={`/admin/subcategory/edit/${category._id}`}
            >
              <EditOutlined style={{ color: "blue" }} />{" "}
            </NavLink>
            <span
              style={{ cursor: "pointer" }}
              key={2}
              className="text-2xl"
              onClick={() => {
                if (
                  window.confirm("Are you sure to delete sub category " + category.name)
                ) {
                    dispatch(deleteSubCategory(category._id));
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
  const data = subCategoryList;



  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  return (
    <div>
      <h3 className="text-4xl">Manage Sub Category</h3>
      <Button
        type="primary"
        shape="round"
        className="mb-5"
        onClick={() => {
          props.history.push("/admin/subcategory/addnew");
        }}
      >
        Add New Sub Category{" "}
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

export default SubCategory;