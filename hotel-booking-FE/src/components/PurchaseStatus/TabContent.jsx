import React, { useEffect, useState } from "react";
import PurchaseManagementCard from "./PurchaseManagementCard";
import useQuery from "../../core/hooks/useQuery";
import { useDispatch } from "react-redux";
import { getPurchaseByStatus } from "../../slices/booking.slice";
import { unwrapResult } from "@reduxjs/toolkit";
import { Typography } from "antd";
import { InboxOutlined } from "@ant-design/icons";
const TabContent = () => {
  const query = useQuery();
  const [purchases, setPurchases] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const _getPurchaseByStatus = async () => {
      const params = {
        ...query,
      };
      try {
        const data = await dispatch(getPurchaseByStatus({ params }));
        const res = unwrapResult(data);
        setPurchases(res.data);
      } catch (error) {}
    };
    _getPurchaseByStatus();
  }, [dispatch, query]);
  return (
    <>
      {purchases.books?.[0] ? (
        purchases.books.map((purchase) => (
          <PurchaseManagementCard key={purchase.id} purchase={purchase} />
        ))
      ) : (
        <>
          <p className=" mt-20 text-9xl text-gray-400">
            <InboxOutlined />
          </p>
          <Typography.Title className="text-center">
            Chưa có dữ liệu
          </Typography.Title>
        </>
      )}
    </>
  );
};

export default TabContent;
