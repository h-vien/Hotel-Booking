import {
  AndroidOutlined,
  AppleOutlined,
  CustomerServiceOutlined,
} from "@ant-design/icons";
import { Button, Tabs } from "antd";
import { Content } from "antd/lib/layout/layout";
import React from "react";
import HomeLayout from "../../core/layout/HomeLayout";

const BookingManagement = () => {
  const handleClick = (e) => {
    console.log(e);
  };
  return (
    <HomeLayout>
      <Content className="max-w-6xl h-screen mx-auto mt-5">
        <Tabs defaultActiveKey="2" onChange={handleClick} className="mt-14">
          <Tabs.TabPane tab="Chờ xác nhận" key="1">
            Tab 1
          </Tabs.TabPane>
          <Tabs.TabPane tab=" Đã xác nhận" key="2">
            Tab 2
          </Tabs.TabPane>
          <Tabs.TabPane tab="Chờ thanh toán" key="3">
            Tab 2
          </Tabs.TabPane>
          <Tabs.TabPane tab="Đã thanh toán" key="4">
            Tab 2
          </Tabs.TabPane>
          <Tabs.TabPane tab="Đã Hủy" key="5">
            Tab 2
          </Tabs.TabPane>
        </Tabs>
      </Content>
    </HomeLayout>
  );
};

export default BookingManagement;
