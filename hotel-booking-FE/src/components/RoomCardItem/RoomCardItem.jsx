import { Button, Tag, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { typeOfRoom } from "../../constant/common";
import { formatMoney } from "../../utils/helper";
const RoomCardItem = ({ room }) => {
  return (
    <div className="w-full bg-white rounded-lg cursor-default hover:shadow-md p-4 mb-4">
      <div className="flex justify-between ">
        <div className="h-40 w-56 mr-4 ">
          <img
            className="rounded mr-4 inline-block"
            src={room.image}
            alt={room.roomName}
          />
        </div>
        <div className="flex items-center flex-1 justify-between">
          <div className="flex-col  w-3/4">
            <Typography.Title>{room.roomName}</Typography.Title>
            <Tag color={typeOfRoom[room.type_id].color}>
              {typeOfRoom[room.type_id].label}
            </Tag>
            <Typography.Text className="block py-2 font-bold">
              Số giường: {room.bed_quantity}
            </Typography.Text>
            <Typography.Text className="pb-4">
              {room.description}
            </Typography.Text>
          </div>
          <div className="flex justify-end">
            <div className="flex-col items-center ">
              <span className="block text-right line-through">
                {formatMoney(room.price)} vnd
              </span>
              <span className="block text-right font-bold text-2xl py-1 text-red-400">
                {formatMoney(room.price)} vnd
              </span>

              <Link to={`/booking/${room.id}`} className="text-right block">
                <Button type="primary">Đặt phòng</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCardItem;
