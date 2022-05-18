import { DownOutlined, PlusOutlined, UserOutlined } from "@ant-design/icons";
import { unwrapResult } from "@reduxjs/toolkit";
import { Avatar, Button, Dropdown, Menu } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Logo from "../../assets/Logo.png";
import { role } from "../../constant/common";
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

  return (
    <Menu>
      <Menu.Item key="0">
        <Link to="/profile">Trang cá nhân</Link>
      </Menu.Item>
      {roleId === 2 ? (
        <Menu.Item key="2">
          <Link to="/create-room">Tạo phòng</Link>
        </Menu.Item>
      ) : null}
      <Menu.Item key="1">
        <Link to="/login" onClick={handleLogout}>
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
              <Link to="/register-member">
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
                  <Avatar src="" icon={<UserOutlined />} />
                  <div>
                    <span className="text-lg inline-block px-2">
                      {profile.user.lastName}
                    </span>
                    <span> - </span>
                    <span className="text-sm inline-block px-2">
                      {role[profile.user.roleId].name}
                    </span>
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
              <Link to="/login">Đăng nhập</Link>
            </Button>
            <Button type="outlined" className=" flex items-center ml-4">
              <Link to="/register">Đăng ký</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
