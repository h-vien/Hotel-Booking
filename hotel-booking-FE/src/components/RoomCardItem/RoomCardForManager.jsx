import { unwrapResult } from "@reduxjs/toolkit";
import { Button, Tag, Typography } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { toast } from "react-toastify";
import { typeOfRoom } from "../../constant/common";
import { deleteRoomById } from "../../slices/room.slice";
import { formatMoney } from "../../utils/helper";

const RoomCardForManager = ({ room }) => {
  console.log(room);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleDelete = async (id) => {
    try {
      const res = dispatch(deleteRoomById(id));
      unwrapResult(res);

      toast.success(res.message);
      history.go(0);
    } catch (error) {}
  };
  return (
    <div className="w-full bg-white rounded-lg cursor-default hover:shadow-md p-4 mb-4 z-0">
      <div className="flex justify-between ">
        <div className="h-40 w-56 mr-4 ">
          <img className="rounded mr-4 inline-block" src={room.image} alt="" />
        </div>
        <div className="flex items-center flex-1 justify-between">
          <div className="flex justify-between items-center w-full ">
            <div className=" w-3/4">
              <Typography.Title>{room.roomName}</Typography.Title>
              <Tag color={typeOfRoom[room.type_id].color}>
                {typeOfRoom[room.type_id].label}
              </Tag>

              <Typography.Text className="my-2 pr-4 block">
                {room.description}
              </Typography.Text>
            </div>
            <div className="w-1/4">
              <Typography.Text className="flex font-medium items-center">
                {room.bed_quantity} giường
              </Typography.Text>
              <Typography.Text className="block text-xl">
                <span className="font-bold text-orange-300">
                  {formatMoney(room.price)} VNĐ
                </span>
              </Typography.Text>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="flex-col items-center ">
              <div className="my-4">
                <Button type="danger" onClick={() => handleDelete(room.id)}>
                  Xóa phòng
                </Button>
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
