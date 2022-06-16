import React, { useEffect, useState } from "react";
import PurchaseManagementCard from "./PurchaseManagementCard";
import useQuery from "../../core/hooks/useQuery";
import { useDispatch } from "react-redux";
import { getPurchaseByStatus } from "../../slices/booking.slice";
import { unwrapResult } from "@reduxjs/toolkit";
import qs from "query-string";
import { Pagination, Select, Typography } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { Segmented } from "antd";
const TabContent = () => {
  const query = useQuery();
  const [purchases, setPurchases] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [sortBy, setSortBy] = useState("checkin_date");
  const [direction, setDirection] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    const _getPurchaseByStatus = async () => {
      const params = {
        ...query,
        page: currPage,
        sort: sortBy,
        direction,
      };
      try {
        const data = await dispatch(getPurchaseByStatus({ params }));
        const res = unwrapResult(data);
        setPurchases(res.data);
      } catch (error) {}
    };
    _getPurchaseByStatus();
  }, [dispatch, query, currPage, sortBy, direction]);
  const onShowSizeChange = (e) => {
    setCurrPage(e);
    const params = {
      ...query,
      page: e,
    };
    history.push(`/dashboard/booking-management/hotel?${qs.stringify(params)}`);
  };
  const handleSort = (val) => {
    setSortBy(val);
  };
  const handleSortDirection = (val) => {
    setDirection(val);
  };
  return (
    <>
      <div className="flex items-center justify-between w-full py-8">
        <div className="flex flex-1 items-center">
          <Typography.Text className="mr-6">Sắp xếp theo</Typography.Text>

          <Segmented
            block
            options={[
              { label: <span> Ngày </span>, value: "checkin_date" },
              { label: <span> Tên</span>, value: "fullName" },
              { label: <span> Giá</span>, value: "totalprice" },
            ]}
            onChange={handleSort}
          />

          <Select
            className="ml-6"
            placeholder="Chiều"
            style={{ width: 120 }}
            onChange={handleSortDirection}
          >
            <Select.Option value="desc">Giảm dần</Select.Option>
            <Select.Option value="asc">Tăng dần</Select.Option>
          </Select>
        </div>
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
