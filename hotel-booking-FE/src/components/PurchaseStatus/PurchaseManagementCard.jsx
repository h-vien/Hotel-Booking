import { Checkbox, Typography } from "antd";
import React from "react";
import { formatDate, formatMoney } from "../../utils/helper";

const PurchaseManagementCard = ({ purchase }) => {
  console.log(purchase);
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <>
      {purchase && (
        <div className="w-full bg-white rounded-lg cursor-default hover:shadow-md p-4 mb-4 z-0">
          <div className="flex justify-between items-center">
            <div className="mr-12">
              <Checkbox onChange={onChange}></Checkbox>
            </div>
            <div className="flex-1 justify-between flex">
              <div className="flex-col w-2/3">
                <Typography.Text className="block text-base">
                  <span className="inline-block w-1/4">Người đặt</span>:{" "}
                  {purchase.fullName}
                </Typography.Text>
                <Typography.Text className="block text-base">
                  <span className="inline-block w-1/4">Số điện thoại</span>:{" "}
                  {purchase.phonenumber}
                </Typography.Text>
              </div>
              <div className="flex-col w-2/3">
                <Typography.Text className="block text-base">
                  <span className="inline-block w-1/5">Ngày đến</span>:{" "}
                  {formatDate(purchase.checkinDate)}
                </Typography.Text>
                <Typography.Text className="block text-base">
                  <span className="inline-block w-1/5">Ngày đi</span>:{" "}
                  {formatDate(purchase.checkoutDate)}
                </Typography.Text>
              </div>
              <div className=" flex items-center w-1/4 justify-end">
                <Typography.Text className="block text-xl font-bold  w-full">
                  Giá:{" "}
                  <span className="text-orange-500">
                    {formatMoney(purchase.totalPrice)}
                  </span>
                </Typography.Text>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PurchaseManagementCard;
