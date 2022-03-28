import { Col, Row } from "antd";
import React from "react";
import CardItem from "../components/CardItem/CardItem";
import Hero from "../components/Hero/Hero";
import HotelSlider from "../components/Slider/Slider";
import HomeLayout from "../core/layout/HomeLayout";

const HomePage = () => {
  return (
    <HomeLayout>
      <div className="overflow-hidden max-w-6xl mx-auto ">
        <div
          className="site-layout-background mt-4 rounded-lg"
          style={{ padding: 24, minHeight: 380 }}
        >
          <Hero />
        </div>
        {/* <HotelSlider /> */}
        <h1 className="mt-8 mb-2 text-4xl font-medium">
          Các khách sạn phổ biến
        </h1>
        <Row gutter={[16, 16]}>
          <Col xl={6}>
            <CardItem />
          </Col>
          <Col xl={6}>
            <CardItem />
          </Col>
          <Col xl={6}>
            <CardItem />
          </Col>
          <Col xl={6}>
            <CardItem />
          </Col>
        </Row>
      </div>
    </HomeLayout>
  );
};

export default HomePage;
