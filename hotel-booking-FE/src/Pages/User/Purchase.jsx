import { unwrapResult } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPurchase } from "../../slices/booking.slice";
import User from "./User";

const Purchase = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth.profile);
  const [purchaseList, setPurchaseList] = useState([]);
  useEffect(() => {
    const _getPurchase = async () => {
      const params = {
        user_id: user.id,
        page: 1,
      };
      try {
        const data = await dispatch(getPurchase({ params }));
        const res = unwrapResult(data);
        setPurchaseList(res.data);
      } catch (error) {}
    };
    _getPurchase();
  }, []);
  console.log(purchaseList);
  return (
    <User>
      <div className="px-8 bg-white h-screen rounded">Đơn đã đặt</div>
    </User>
  );
};

export default Purchase;
