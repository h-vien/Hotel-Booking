import { Button, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const RoomCardForManager = ({ room }) => {
  console.log(room);
  return (
    <div className="w-full bg-white rounded-lg cursor-default hover:shadow-md p-4 mb-4">
      <div className="flex justify-between ">
        <div className="h-40 w-56 mr-4 ">
          <img className="rounded mr-4 inline-block" src={room.image} alt="" />
        </div>
        <div className="flex items-center flex-1 justify-between">
          <div className="flex-col  w-3/4">
            <Typography.Title>{room.roomName}</Typography.Title>
            <Typography.Text className="pb-4">
              {room.description}
            </Typography.Text>
          </div>
          <div className="flex justify-end">
            <div className="flex-col items-center ">
              <div className="my-4">
                <Button type="danger">Xóa phòng</Button>
              </div>
              <div className="my-4">
                <Button type="primary">Sửa phòng</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCardForManager;
