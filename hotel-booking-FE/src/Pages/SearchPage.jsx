import { Col, Row } from "antd";
import { Content } from "antd/lib/layout/layout";
import React from "react";
import { useSelector } from "react-redux";
import Filter from "../components/Filter/Filter";
import HotelDesc from "../components/HotelDesc/HotelDesc";
import HomeLayout from "../core/layout/HomeLayout";

const SearchPage = () => {
  const hotelSearch = useSelector((state) => state.hotel.hotels);
  return (
    <HomeLayout>
      <Content className="max-w-6xl mx-auto mt-5">
        <Row gutter={[16, 16]}>
          <Col span={6}>
            <Filter />
          </Col>
          <Col span={18}>
            <Row>
              {hotelSearch.hotels?.[0] ? (
                hotelSearch.hotels.map((hotel) => (
                  <Col span={24} key={hotel.id}>
                    <HotelDesc hotelInfo={hotel} />
                  </Col>
                ))
              ) : (
                <h1 className="h-screen mx-auto text-4xl text-orange-500">
                  Không tìm thấy khách sạn nào phù hợp
                </h1>
              )}
            </Row>
          </Col>
        </Row>
      </Content>
    </HomeLayout>
  );
};

export default SearchPage;
