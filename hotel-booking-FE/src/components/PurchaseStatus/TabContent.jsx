import React, { useEffect, useState } from "react";
import PurchaseManagementCard from "./PurchaseManagementCard";
import useQuery from "../../core/hooks/useQuery";
import { useDispatch } from "react-redux";
import { getPurchaseByStatus } from "../../slices/booking.slice";
import { unwrapResult } from "@reduxjs/toolkit";
import qs from "query-string";
import { Pagination, Typography } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
const TabContent = () => {
  const query = useQuery();
  const [purchases, setPurchases] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    const _getPurchaseByStatus = async () => {
      const params = {
        ...query,
        page: currPage,
      };
      try {
        const data = await dispatch(getPurchaseByStatus({ params }));
        const res = unwrapResult(data);
        setPurchases(res.data);
      } catch (error) {}
    };
    _getPurchaseByStatus();
  }, [dispatch, query, currPage]);
  const onShowSizeChange = (e) => {
    setCurrPage(e);
    const params = {
      ...query,
      page: e,
    };
    history.push(`/dashboard/booking-management/hotel?${qs.stringify(params)}`);
  };
  return (
    <>
      <div className="flex items-center justify-end w-full py-8">
        <Pagination
          simple
          current={currPage}
          total={
            purchases.totalPage * purchases.maxPageItem !== 0
              ? purchases.totalPage * purchases.maxPageItem
              : 1
          }
          onChange={onShowSizeChange}
        />
      </div>
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
