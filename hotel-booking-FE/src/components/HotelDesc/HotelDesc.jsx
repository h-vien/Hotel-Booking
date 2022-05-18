import { Button, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import HotelDetail from "../../Pages/HotelDetail";

const HotelDesc = ({ hotelInfo }) => {
  return (
    <div className="w-full bg-white rounded-lg cursor-default hover:shadow-md p-4 mb-4">
      <div className="flex justify-between items-center">
        <div className="h-40 w-56 mr-4 ">
          <img
            className="rounded mr-4 inline-block"
            src={
              hotelInfo.image ||
              "https://vnpi-hcm.vn/wp-content/uploads/2018/01/no-image-800x600.png"
            }
            alt=""
          />
        </div>
        <div className="flex flex-col flex-1 justify-between">
          <Typography.Title>{hotelInfo.hotelName}</Typography.Title>
          <Typography.Text className="pb-4">
            {hotelInfo.hotelDescription}
          </Typography.Text>
          <div className="flex justify-between items-center">
            <div>
              <span className="font-medium text-orange-400">
                {hotelInfo.hotelAddress}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="block  py-2">
                Số lượng phòng : {hotelInfo.roomQuantity}
              </span>
              <Link to={`/hotel/${hotelInfo.id}`}>
                <Button>Xem Khách sạn</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDesc;
