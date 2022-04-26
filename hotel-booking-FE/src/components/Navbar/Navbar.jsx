import { DownOutlined, PlusOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Dropdown, Menu } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { useAuthenticated } from "../../core/hooks/useAuthenticated";
import { logout } from "../../slices/auth.slice";
import styles from "./style.module.scss";
const DropDownList = () => {
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      await dispatch(logout());
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Menu>
      <Menu.Item key="0">
        <Link to="/profile">Profile</Link>
      </Menu.Item>
      <Menu.Item key="1">
        <Link to="/login" onClick={handleLogout}>
          Log out
        </Link>
      </Menu.Item>
    </Menu>
  );
};
const Navbar = () => {
  const profile = useSelector((state) => state.auth.profile);
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
            Hauteo Búcking
          </span>
        </div>
      </Link>
      <div className="flex items-center">
        {authenticated && (
          <>
            <Link to="/register-member">
              <Button
                type="primary"
                className="mr-2 flex items-center py-2 px-3"
              >
                <PlusOutlined />
                Đăng ký thành viên
              </Button>
            </Link>
            <div className="flex items-center">
              <Dropdown overlay={DropDownList()} trigger={["click"]}>
                <a href="/" className="flex items-center ml-4">
                  <Avatar src="" icon={<UserOutlined />} />
                  <p className="px-2">{profile.lastName}</p>
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
