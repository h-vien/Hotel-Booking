import { unwrapResult } from "@reduxjs/toolkit";
import { Col, Row, Typography } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPurchase } from "../../slices/booking.slice";
import User from "./User";
import PurchaseCard from "../../components/PurchaseCard/PurchaseCard";
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
      <div className="px-8 bg-white h-screen rounded">
        <Typography.Title level={3} className="pt-5">
          Đơn đã đặt
        </Typography.Title>
        <Row gutter={[24, 24]} className="bg-orange-200 p-4">
          <Col sm={6}>
            <Typography.Text className="font-bold">Khách sạn</Typography.Text>
          </Col>
          <Col sm={6}>
            <Typography.Text className="font-bold">Địa chỉ</Typography.Text>
          </Col>
          <Col sm={3}>
            <Typography.Text className="font-bold">Phòng</Typography.Text>
          </Col>
          <Col sm={3}>
            <Typography.Text className="font-bold">Ngày đến</Typography.Text>
          </Col>
          <Col sm={3}>
            <Typography.Text className="font-bold">Ngày đi</Typography.Text>
          </Col>
          <Col sm={3}>
            <Typography.Text className="font-bold">Giá (VNĐ)</Typography.Text>
          </Col>
        </Row>
        {purchaseList.books?.[0] &&
          purchaseList.books.map((purchase) => (
            <PurchaseCard purchase={purchase} key={purchase.id} />
          ))}
      </div>
    </User>
  );
};

export default Purchase;
