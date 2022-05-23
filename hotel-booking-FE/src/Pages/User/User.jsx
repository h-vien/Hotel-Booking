import { HistoryOutlined, KeyOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Col, Menu, Row, Typography } from "antd";
import { Content } from "antd/lib/layout/layout";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { path } from "../../constant/path";
import HomeLayout from "../../core/layout/HomeLayout";

const User = ({ children }) => {
  const { user } = useSelector((state) => state.auth.profile);
  return (
    <HomeLayout>
      <Content className="max-w-6xl min-h-screen mx-auto mt-5">
        <Row gutter={[16, 16]}>
          <Col sm={4} className="bg-white py-5 h-screen">
            <Avatar
              className="border border-orange-500 ml-4"
              src={user.image}
              size={{ xl: 80 }}
            />
            <Typography.Text className="inline-block ml-4 font-semibold">
              {user.username}
            </Typography.Text>
            <Menu className="profile-menu mt-8">
              <Menu.Item key={1} icon={<UserOutlined />}>
                <Link to={path.user}>Trang cá nhân</Link>
              </Menu.Item>
              <Menu.Item key={2} icon={<HistoryOutlined />}>
                <Link to={path.purchase}>Vé đã đặt</Link>
              </Menu.Item>
              <Menu.Item key={3} icon={<KeyOutlined />}>
                <Link to={path.changePass}>Đổi mật khẩu</Link>
              </Menu.Item>
            </Menu>
          </Col>
          <Col sm={20}>{children}</Col>
        </Row>
      </Content>
    </HomeLayout>
  );
};

export default User;
