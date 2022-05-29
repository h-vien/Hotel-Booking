import { DownOutlined, PlusOutlined, UserOutlined } from "@ant-design/icons";
import { unwrapResult } from "@reduxjs/toolkit";
import { Avatar, Button, Dropdown, Menu, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Logo from "../../assets/Logo.png";
import { role } from "../../constant/common";
import { path } from "../../constant/path";
import { useAuthenticated } from "../../core/hooks/useAuthenticated";
import { logout } from "../../slices/auth.slice";
import styles from "./style.module.scss";
const DropDownList = ({ roleId }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogout = async () => {
    try {
      const res = await dispatch(logout());
      unwrapResult(res);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  const { hotel } = useSelector((state) => state.auth.profile);
  return (
    <Menu>
      <Menu.Item key="0">
        <Link to={path.user}>Trang cá nhân</Link>
      </Menu.Item>
      {roleId === 2 ? (
        <>
          <Menu.Item key="2">
            <Link
              to={`/booking-management/hotel?hotel_id=${hotel.id}&page=1&status=0`}
            >
              Quản lý đặt phòng
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to={path.createRoom}>Tạo phòng</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to={path.overview}>Tổng quan</Link>
          </Menu.Item>
        </>
      ) : null}
      <Menu.Item key="1">
        <Link to={path.login} onClick={handleLogout}>
          Đăng xuất
        </Link>
      </Menu.Item>
    </Menu>
  );
};
const Navbar = () => {
  const profile = useSelector((state) => state.auth.profile);
  const roleId = profile?.user?.roleId;
  const authenticated = useAuthenticated();
  return (
    <nav
      className={`flex max-w-6xl mx-auto justify-between ${styles.navbarWrapper}`}
    >
      <Link to="/">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-lg">
            <img src={Logo} alt="" />
          </div>
          <span className="ml-3 font-bold capitalize cursor-pointer">
            Hotel Booking
          </span>
        </div>
      </Link>
      <div className="flex items-center">
        {authenticated && (
          <>
            {profile.user.roleId !== 2 ? (
              <Link to={path.registerMember}>
                <Button
                  type="primary"
                  className="mr-2 flex items-center py-2 px-3"
                >
                  <PlusOutlined />
                  Đăng ký thành viên
                </Button>
              </Link>
            ) : null}

            <div className="flex items-center">
              <Dropdown overlay={DropDownList({ roleId })} trigger={["click"]}>
                <a href="/" className="flex items-center ml-4">
                  <Avatar src={profile.user?.image} icon={<UserOutlined />} />
                  <div className="flex flex-col px-4">
                    <Typography.Text className="text-lg inline-block nav-title">
                      {profile.user.username || profile.user.lastName}
                    </Typography.Text>
                    <Typography.Text className="text-sm inline-block">
                      {role[profile.user.roleId].name}
                    </Typography.Text>
                  </div>
                  <DownOutlined />
                </a>
              </Dropdown>
            </div>
          </>
        )}
        {!authenticated && (
          <div className="flex items-center">
            <Button type="primary" className=" flex items-center ">
              <Link to={path.login}>Đăng nhập</Link>
            </Button>
            <Button type="outlined" className=" flex items-center ml-4">
              <Link to={path.register}>Đăng ký</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
