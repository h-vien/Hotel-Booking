import { Content } from "antd/lib/layout/layout";
import React from "react";
import RoomCardForManager from "../components/RoomCardItem/RoomCardForManager";
import HomeLayout from "../core/layout/HomeLayout";

const CreateRoom = () => {
  return (
    <HomeLayout>
      <Content className="max-w-6xl mx-auto mt-5">
        <RoomCardForManager />
        <RoomCardForManager />
        <RoomCardForManager />
        <RoomCardForManager />
        <RoomCardForManager />
        <RoomCardForManager />
        <RoomCardForManager />
      </Content>
    </HomeLayout>
  );
};

export default CreateRoom;
