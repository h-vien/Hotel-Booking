import { Button, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const HotelDesc = ({ hotelInfo }) => {
  return (
    <div className="w-full bg-white rounded-lg cursor-default hover:shadow-md p-4 mb-4">
      <div className="flex justify-between ">
        <div className="h-40 w-56 mr-4 ">
          <img
            className="rounded mr-4 inline-block"
            src={hotelInfo.img}
            alt=""
          />
        </div>
        <div className="flex flex-col flex-1 justify-between">
          <Typography.Title>{hotelInfo.hotelName}</Typography.Title>
          <Typography.Text className="pb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed neque,
            eaque natus, enim ipsa sint dolorem beatae accusantium quis in ea,
            sequi distinctio aperiam asperiores ut? Esse, non. Perferendis, ex?
          </Typography.Text>
          <div className="flex justify-end">
            <Link to="/hotel/123">
              <Button>Xem Khách sạn</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDesc;
