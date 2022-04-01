import { DownOutlined, PlusOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Dropdown } from "antd";
import styles from "./style.module.scss";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
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
      <div className="flex items-center"></div>
      <div className="flex items-center">
        <Link to="/register-member">
          <Button type="primary" className="mr-2 flex items-center py-2 px-3">
            <PlusOutlined />
            Đăng ký thành viên
          </Button>
        </Link>
        <div className="flex items-center">
          <Dropdown
            // overlay={DropDownList(routesDefaultSpace, "", onSignoutSuccess)}
            trigger={["click"]}
          >
            <a href="/" className="flex items-center ml-4">
              <Avatar src="" icon={<UserOutlined />} />
              <p className="px-2">Viên</p>
              <DownOutlined />
            </a>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
