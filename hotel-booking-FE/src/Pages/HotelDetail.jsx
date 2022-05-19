import { unwrapResult } from "@reduxjs/toolkit";
import { Typography } from "antd";
import { Content } from "antd/lib/layout/layout";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import RoomCardItem from "../components/RoomCardItem/RoomCardItem";
import LocalStorage from "../constant/localStorage";
import HomeLayout from "../core/layout/HomeLayout";
import { searchRoomById } from "../slices/room.slice";

const HotelDetail = () => {
  const [roomFiltered, setRoomFiltered] = useState();
  const { id } = useParams();
  const filters = JSON.parse(localStorage.getItem(LocalStorage.filters));
  const dispatch = useDispatch();
  const { province_id, ...searchRoom } = filters;
  const params = {
    ...searchRoom,
    hotel_id: id,
  };
  useEffect(() => {
    const _getRoom = async () => {
      const _data = await dispatch(searchRoomById({ params }));
      const res = unwrapResult(_data);

      setRoomFiltered(res.data);
    };
    _getRoom();
  }, []);
  return (
    <HomeLayout>
      <Content className="max-w-6xl h-screen mx-auto mt-5">
        <Typography.Title level={1}>Danh sách các phòng</Typography.Title>
        {roomFiltered?.rooms?.[0] &&
          roomFiltered.rooms.map((room) => (
            <RoomCardItem key={room.id} room={room} />
          ))}
      </Content>
    </HomeLayout>
  );
};

export default HotelDetail;
