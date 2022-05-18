import { unwrapResult } from "@reduxjs/toolkit";
import { Col, Row } from "antd";
import { Content } from "antd/lib/layout/layout";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../components/Filter/Filter";
import HotelDesc from "../components/HotelDesc/HotelDesc";
import LocalStorage from "../constant/localStorage";
import useQuery from "../core/hooks/useQuery";
import HomeLayout from "../core/layout/HomeLayout";
import { getHotels } from "../slices/hotel.slice";

const SearchPage = () => {
  const hotelSearch = useSelector((state) => state.hotel.hotels);
  const [hotelList, setHotelList] = useState({});

  const query = useQuery();
  const dispatch = useDispatch();
  const [filters, setFilters] = useState();
  useEffect(() => {
    const _filters = {
      ...query,
      page: query.page || 1,
    };

    const params = {
      checkin_date: _filters.checkin_date,
      checkout_date: _filters.checkout_date,
      province_id: _filters.province_id,
      type_room_id: _filters.type_room_id,
      bed_quantity: _filters.bed_quantity,
      page: _filters.page,
    };
    setFilters(params);
    const _getHotels = async () => {
      const data = await dispatch(getHotels({ params }));
      const res = unwrapResult(data);
      setHotelList(res.data);
    };
    _getHotels();
  }, [query, dispatch]);
  localStorage.setItem(LocalStorage.filters, JSON.stringify(filters));

  return (
    <HomeLayout>
      <Content className="max-w-6xl mx-auto mt-5">
        <Row gutter={[16, 16]}>
          <Col span={6}>
            <Filter filters={filters} />
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
