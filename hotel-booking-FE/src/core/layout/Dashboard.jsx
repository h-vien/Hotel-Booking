import { Col, Menu, Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { path } from "../../constant/path";
const DashboardLayout = ({ children }) => {
  const location = useLocation();
  const { hotel } = useSelector((state) => state.auth.profile);
  return (
    <Row gutter={[16, 16]}>
      <Col md={4}>
        <div className="bg-white min-h-screen py-8 ">
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
          <Menu className="mt-5" defaultSelectedKeys={location.pathname}>
            <Menu.Item key={path.overview}>
              <Link to={path.overview}>Tổng quan</Link>
            </Menu.Item>
            <Menu.Item key={path.bookingManagement}>
              <Link
                to={`/dashboard/booking-management/hotel?hotel_id=${hotel.id}&page=1&status=0`}
              >
                Quản lý đặt phòng
              </Link>
            </Menu.Item>
            <Menu.Item key={path.createRoom}>
              <Link to={path.createRoom}>Quản lý phòng</Link>
            </Menu.Item>
          </Menu>
        </div>
      </Col>
      <Col md={20} className="min-h-screen bg-gray-100">
        {children}
      </Col>
    </Row>
  );
};

export default DashboardLayout;
