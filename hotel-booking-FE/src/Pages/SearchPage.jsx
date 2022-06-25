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
import { Pagination } from "antd";
const SearchPage = () => {
  const hotelSearch = useSelector((state) => state.hotel.hotelData);
  const [hotelList, setHotelList] = useState({});
  const [currPage, setCurrPage] = useState(1);
  const query = useQuery();
  const dispatch = useDispatch();
  const [filters, setFilters] = useState();
  useEffect(() => {
    const _filters = {
      ...query,
      page: query.page || currPage,
    };

    const params = {
      checkin_date: _filters.checkin_date,
      checkout_date: _filters.checkout_date,
      province_id: _filters.province_id,
      type_room_id: _filters.type_room_id,
      bed_quantity: _filters.bed_quantity,
      page: currPage,
    };
    setFilters(params);
    const _getHotels = async () => {
      const data = await dispatch(getHotels({ params }));
      const res = unwrapResult(data);
      setHotelList(res.data);
    };
    _getHotels();
  }, [query, dispatch, currPage]);
  localStorage.setItem(LocalStorage.filters, JSON.stringify(filters));
  console.log(hotelList);
  const onShowSizeChange = (curr) => {
    setCurrPage(curr);
  };
  console.log(currPage);
  return (
    <HomeLayout>
      <Content className="max-w-6xl min-h-screen mx-auto mt-5">
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
            <Row>
              <div className="flex w-full mt-8 items-center justify-center">
                <Pagination
                  defaultCurrent={currPage}
                  current={currPage}
                  total={
                    hotelList.totalPage * hotelList.maxPageItem !== 0
                      ? hotelList.totalPage * hotelList.maxPageItem
                      : 1
                  }
                  onChange={onShowSizeChange}
                />
              </div>
            </Row>
          </Col>
        </Row>
      </Content>
    </HomeLayout>
  );
};

export default SearchPage;
