import { Button, Checkbox, Typography } from "antd";
import React from "react";
import { formatDate, formatMoney } from "../../utils/helper";
import { useDispatch } from "react-redux";
import { updatePurchaseStatus } from "../../slices/booking.slice";
import { unwrapResult } from "@reduxjs/toolkit";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
const PurchaseManagementCard = ({ purchase }) => {
  console.log(purchase);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleUpdate = (id) => {
    console.log(`checked = ${id}`);
    try {
      if (purchase.status >= 3) {
        toast.error("Không thể cập nhập vé");
      } else {
        const _data = {
          id: purchase.id,
          hotel_id: purchase.hotel_id,
          status: purchase.status + 1,
        };
        const res = dispatch(updatePurchaseStatus(_data));
        unwrapResult(res);
        history.go(0);
      }
    } catch (error) {}
  };
  const handleCancel = (id) => {
    try {
      const _data = {
        id: purchase.id,
        hotel_id: purchase.hotel_id,
        status: 4,
      };
      const res = dispatch(updatePurchaseStatus(_data));
      unwrapResult(res);
      history.go(0);
    } catch (error) {}
  };
  return (
    <>
      {purchase && (
        <div className="w-full bg-white rounded-lg cursor-default hover:shadow-md p-4 mb-4 z-0">
          <div className="flex justify-between items-center">
            <div className="mr-12">
              {purchase.status < 3 ? (
                <Checkbox onChange={() => handleUpdate(purchase.id)}></Checkbox>
              ) : null}
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
                  <span className="inline-block w-2/5">Ngày nhận phòng</span>:{" "}
                  {formatDate(purchase.checkinDate)}
                </Typography.Text>
                <Typography.Text className="block text-base">
                  <span className="inline-block w-2/5">Ngày trả phòng</span>:{" "}
                  {formatDate(purchase.checkoutDate)}
                </Typography.Text>
              </div>
              <div className=" flex items-center w-1/4 justify-end">
                <div className="flex flex-col">
                  <Typography.Text className="block text-xl font-bold  w-full">
                    Giá:{" "}
                    <span className="text-orange-500">
                      {formatMoney(purchase.totalPrice)}
                    </span>
                  </Typography.Text>
                  {purchase.status < 3 ? (
                    <Button onClick={() => handleCancel(purchase.id)}>
                      Hủy đặt
                    </Button>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PurchaseManagementCard;
