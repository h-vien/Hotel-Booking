import { unwrapResult } from "@reduxjs/toolkit";
import { Button, DatePicker, Select } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { province } from "../../constant/province";
import { getHotels } from "../../slices/hotel.slice";
const { Option, OptGroup } = Select;

const Hero = () => {
  const [address, setAddress] = useState("");
  const [room, setRoom] = useState("");
  const [bed, setBed] = useState("");
  const [date, setDate] = useState([]);
  const [hotelList, setHotelList] = useState([]);
  function handleRoomSelect(value) {
    setRoom(value);
  }
  function handleBedSelect(value) {
    setBed(value);
  }

  function onChange(value, dateString) {
    setDate(dateString);
  }

  const dispatch = useDispatch();
  const handleSearch = () => {
    const _filters = {
      page: 1,
    };
    const params = {
      checkin_date: date[0],
      checkout_date: date[1],
      province_id: address,
      type_room_id: room,
      bed_quantity: bed,
      page: _filters.page,
    };
    const _getHotels = async () => {
      const data = await dispatch(getHotels({ params }));
      const res = unwrapResult(data);
      const _data = res.data.slice(0, -3);
      const convertToJson = JSON.parse(_data);

      setHotelList(convertToJson);
    };
    _getHotels();
  };
  console.log(hotelList);
  const provinceData = province;
  function handleAddressChange(value) {
    setAddress(value);
  }

  return (
    <>
      <div className="w-3/4 flex py-14 mx-auto items-center justify-center">
        <div className="text-6xl font-bold text-white flex-col text-center">
          <span className="hero-title block my-3">Book ngay</span>
          <span className="block">1 chỗ ở nào!</span>
        </div>
      </div>
      <div className="flex">
        <Select
          defaultValue={provinceData[0].name}
          style={{ width: 120 }}
          onChange={handleAddressChange}
        >
          {provinceData.map((province) => (
            <Option value={province.id} key={province.id}>
              {province.name}
            </Option>
          ))}
        </Select>
        <DatePicker.RangePicker
          format="YYYY-MM-DD"
          onChange={onChange}
          className="mx-1"
        />
        <Select
          defaultValue="Phòng Vip"
          style={{ width: 200 }}
          onChange={handleRoomSelect}
        >
          <OptGroup label="Loại phòng">
            <Option value="1">Phòng Vip</Option>
            <Option value="2">Phòng thường</Option>
          </OptGroup>
        </Select>
        <Select
          defaultValue="1 giường"
          style={{ width: 200 }}
          onChange={handleBedSelect}
        >
          <OptGroup label="Số giường">
            <Option value="1">1 giường</Option>
            <Option value="2">2 giường</Option>
          </OptGroup>
        </Select>
        <Link to="/search">
          <Button type="primary" className="btnSearch" onClick={handleSearch}>
            Search
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Hero;