import { Button, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const RoomCardItem = () => {
  return (
    <div className="w-full bg-white rounded-lg cursor-default hover:shadow-md p-4 mb-4">
      <div className="flex justify-between ">
        <div className="h-40 w-56 mr-4 ">
          <img
            className="rounded mr-4 inline-block"
            src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
          />
        </div>
        <div className="flex items-center flex-1 justify-between">
          <div className="flex-col  w-3/4">
            <Typography.Title>Phòng Vip</Typography.Title>
            <Typography.Text className="pb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
              neque, eaque natus, enim ipsa sint dolorem beatae accusantium quis
              in ea, sequi distinctio aperiam asperiores ut? Esse, non.
              Perferendis, ex?
            </Typography.Text>
          </div>
          <div className="flex justify-end">
            <div className="flex-col items-center ">
              <span className="block text-right line-through">999.999 vnd</span>
              <span className="block text-right font-bold text-2xl py-1 text-red-400">
                999.997 vnd
              </span>

              <Link to="/rooms/123" className="text-right block">
                <Button type="primary">Xem phòng</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCardItem;
