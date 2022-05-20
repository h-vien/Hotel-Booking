import {
  HistoryOutlined,
  KeyOutlined,
  PauseCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Col, Menu, Row, Typography } from "antd";
import { Content } from "antd/lib/layout/layout";
import React, { Children } from "react";
import { useSelector } from "react-redux";
import {
  Link,
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import { path } from "../../constant/path";
import HomeLayout from "../../core/layout/HomeLayout";
import ChangePass from "./ChangePass";
import Profile from "./Profile";

const User = ({ children }) => {
  const { user } = useSelector((state) => state.auth.profile);
  return (
    <HomeLayout>
      <Content className="max-w-6xl min-h-screen mx-auto mt-5">
        <Row gutter={[16, 16]}>
          <Col sm={6} className="bg-white py-5 h-screen">
            <Avatar
              className="border border-orange-500"
              src={user.image}
              size={{ xl: 80 }}
            />
            <Typography.Text className="inline-block ml-4 font-semibold">
              {user.username}
            </Typography.Text>
            <Menu className="profile-menu mt-8">
              <Menu.Item key={1} icon={<UserOutlined />}>
                <Link to={path.user}>Chỉnh sửa trang cá nhân</Link>
              </Menu.Item>
              <Menu.Item key={2} icon={<HistoryOutlined />}>
                <Link to={path.purchase}>Vé đã đặt</Link>
              </Menu.Item>
              <Menu.Item key={3} icon={<KeyOutlined />}>
                <Link to={path.changePass}>Đổi mật khẩu</Link>
              </Menu.Item>
            </Menu>
          </Col>
          <Col sm={18}>{children}</Col>
        </Row>
      </Content>
    </HomeLayout>
  );
};

export default User;
