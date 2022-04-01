import { Typography } from "antd";
import { Content } from "antd/lib/layout/layout";
import React from "react";
import RoomCardItem from "../components/RoomCardItem/RoomCardItem";
import HomeLayout from "../core/layout/HomeLayout";

const HotelDetail = () => {
  return (
    <HomeLayout>
      <Content className="max-w-6xl mx-auto mt-5">
        <Typography.Title level={1}>Danh sách các phòng</Typography.Title>
        <RoomCardItem />
        <RoomCardItem />
        <RoomCardItem />
        <RoomCardItem />
        <RoomCardItem />
        <RoomCardItem />
      </Content>
    </HomeLayout>
  );
};

export default HotelDetail;
