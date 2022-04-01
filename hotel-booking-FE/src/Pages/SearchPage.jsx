import { Button, Col, Row } from "antd";
import { Content } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import React, { useState } from "react";
import Filter from "../components/Filter/Filter";
import HotelDesc from "../components/HotelDesc/HotelDesc";
import HomeLayout from "../core/layout/HomeLayout";

const SearchPage = () => {
  const dummyData = [
    {
      id: 1,
      hotelName: "Del Luna Hotel",
      img: "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 2,
      hotelName: "Del Sun Hotel",
      img: "https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: 3,
      hotelName: "Del Mecury Hotel",
      img: "https://images.pexels.com/photos/827528/pexels-photo-827528.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: 4,
      hotelName: "Del Venus Hotel",
      img: "https://images.pexels.com/photos/2507010/pexels-photo-2507010.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: 5,
      hotelName: "ABC Hotel",
      img: "https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: 6,
      hotelName: "Minh Toan Hotel",
      img: "https://images.pexels.com/photos/53577/hotel-architectural-tourism-travel-53577.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: 7,
      hotelName: "Minh Tuan Hotel",
      img: "https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
  ];

  return (
    <HomeLayout>
      <Content className="max-w-6xl mx-auto mt-5">
        <Row gutter={[16, 16]}>
          <Col span={6}>
            <Filter />
          </Col>
          <Col span={18}>
            <Row>
              {dummyData.map((hotel) => (
                <Col span={24} key={hotel.id}>
                  <HotelDesc hotelInfo={hotel} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Content>
    </HomeLayout>
  );
};

export default SearchPage;
