import { HomeOutlined } from "@ant-design/icons";
import { Input, DatePicker, Button, Select } from "antd";
import Search from "antd/lib/transfer/search";
import { useState } from "react";
import { Link } from "react-router-dom";
const { Option, OptGroup } = Select;

const Hero = () => {
  const [searchValue, setSearchValue] = useState("");
  const [option, setOption] = useState("");
  const [date, setDate] = useState([]);

  const onSearch = (e) => {
    setSearchValue(e.target.value);
  };
  function handleSelect(value) {
    setOption(value);
  }

  function onChange(value, dateString) {
    setDate(dateString);
  }

  const handleSearch = () => {
    console.log({ searchValue, option, date });
  };
  return (
    <>
      <div className="w-3/4 flex py-14 mx-auto items-center justify-center">
        <div className="text-6xl font-bold text-white flex-col text-center">
          <span className="hero-title block my-3">Book ngay</span>
          <span className="block">1 chỗ ở nào!</span>
        </div>
      </div>
      <div className="flex">
        <Input
          placeholder="Nhập địa điểm"
          size="large"
          icon={<HomeOutlined />}
          onChange={onSearch}
          onPressEnter={onSearch}
        />
        <DatePicker.RangePicker
          format="YYYY-MM-DD"
          onChange={onChange}
          className="mx-1"
        />
        <Select
          defaultValue="Phòng Vip"
          style={{ width: 200 }}
          onChange={handleSelect}
        >
          <OptGroup label="Loại phòng">
            <Option value="vip">Phòng Vip</Option>
            <Option value="normal">Phòng thường</Option>
          </OptGroup>
          <OptGroup label="Số giường">
            <Option value="1">1 giường</Option>
            <Option value="2">2 giường</Option>
          </OptGroup>
        </Select>
        <Link to="/search/?q=hoian">
          <Button type="primary" className="btnSearch" onClick={handleSearch}>
            Search
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Hero;
