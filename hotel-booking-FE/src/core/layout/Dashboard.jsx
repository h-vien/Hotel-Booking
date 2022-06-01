import { Col, Menu, Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { path } from "../../constant/path";
const DashboardLayout = ({ children }) => {
  const { hotel } = useSelector((state) => state.auth.profile);
  return (
    <Row gutter={[16, 16]}>
      <Col md={4}>
        <div className="bg-white h-screen py-8 ">
          <Link to="/">
            <div className="flex items-center px-4">
              <div className="w-12 h-12 rounded-lg">
                <img src={Logo} alt="" />
              </div>
              <span className="ml-3 font-bold capitalize cursor-pointer">
                Hotel Booking
              </span>
            </div>
          </Link>
          <Menu className="mt-5">
            <Menu.Item key="2">
              <Link
                to={`/dashboard/booking-management/hotel?hotel_id=${hotel.id}&page=1&status=0`}
              >
                Quản lý đặt phòng
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to={path.createRoom}>Tạo phòng</Link>
            </Menu.Item>
          </Menu>
        </div>
      </Col>
      <Col md={20} className="bg-gray-100">
        {children}
      </Col>
    </Row>
  );
};

export default DashboardLayout;
