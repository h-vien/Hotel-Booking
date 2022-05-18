import { Button, Space, Tag, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { typeOfRoom } from "../../constant/common";

const RoomCardForManager = ({ room }) => {
  return (
    <div className="w-full bg-white rounded-lg cursor-default hover:shadow-md p-4 mb-4 z-0">
      <div className="flex justify-between ">
        <div className="h-40 w-56 mr-4 ">
          <img className="rounded mr-4 inline-block" src={room.image} alt="" />
        </div>
        <div className="flex items-center flex-1 justify-between">
          <div className="flex justify-between items-center">
            <div className="">
              <Typography.Title>{room.roomName}</Typography.Title>
              <Tag color={typeOfRoom[room.type_id].color}>
                {typeOfRoom[room.type_id].label}
              </Tag>

              <Typography.Text className="my-2 pr-4 block">
                {room.description}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates, vel, blanditiis laboriosam quae quasi nihil enim,
                veritatis distinctio illo soluta nam assumenda vero quidem nobis
                quaerat illum! Numquam, sed omnis?
              </Typography.Text>
            </div>
            <div className="w-2/4">
              <Typography.Text className="flex font-medium items-center">
                {room.bed_quantity} giường
              </Typography.Text>
              <Typography.Text className="block text-xl">
                <span className="font-bold text-orange-300">
                  {room.price} VNĐ
                </span>
              </Typography.Text>
            </div>
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
