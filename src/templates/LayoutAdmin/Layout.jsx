import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  TeamOutlined,
  UserOutlined,
  ScheduleFilled,
  TagsFilled,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import _ from "lodash";
import { TOKEN, USER_LOGIN } from "../../util/settings/config";
import { history } from "../../App";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const AdminTemplate = (props) => {

  const { Component, ...restProps } = props;
  const { userLogin } = useSelector(state => state.manageUserReducer);

  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  if (!localStorage.getItem(USER_LOGIN)) {
      alert('You do not have permission to access this page !')
      return <Redirect to='/' />
  }

  if (userLogin.user.role !== 'ADMIN') {
      alert('You do not have permission to access this page !')
      return <Redirect to='/' />

  }


  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        //props.location,props.history,props.match

        return (
          <Fragment>
            <Layout style={{ minHeight: "100vh" }}>
              <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logo p-5">
                  <svg
                    width="89"
                    height="27"
                    viewBox="0 0 89 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="#404145">
                      <path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"></path>
                    </g>
                    <g fill="#1dbf73">
                      <path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path>
                    </g>
                  </svg>
                </div>
                <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                  <Menu.Item key="1" icon={<UserOutlined />}>
                    <NavLink to="/admin/manageuser">Manage Users</NavLink>
                  </Menu.Item>
                  <SubMenu
                    key="sub1"
                    icon={<ScheduleFilled />}
                    title="Manage Categories"
                  >
                    <Menu.Item key="10" icon={<TagsFilled />}>
                      <NavLink to="/admin/maincategory">Main Categories</NavLink>
                    </Menu.Item>
                    <Menu.Item key="11" icon={<TagsFilled />}>
                      <NavLink to="/admin/subcategory">Sub Categories</NavLink>
                    </Menu.Item>
                  </SubMenu>
                  <Menu.Item key="3" icon={<DesktopOutlined />}>
                    <NavLink to="/admin/manageservice">Manage Services</NavLink>
                  </Menu.Item>
                </Menu>
              </Sider>
              <Layout className="site-layout">
                <Header
                  className="site-layout-background"
                  style={{ padding: 0 }}
                >
                  <div className="text-right pr-10 pt-1">Hello</div>
                </Header>
                <Content style={{ margin: "0 16px" }}>
                  <Breadcrumb style={{ margin: "16px 0" }}></Breadcrumb>
                  <div
                    className="site-layout-background"
                    style={{ padding: 24, minHeight: "85vh" }}
                  >
                    <Component {...propsRoute} />
                  </div>
                </Content>
                
              </Layout>
            </Layout>
          </Fragment>
        );
      }}
    />
  );
};

export default AdminTemplate;
