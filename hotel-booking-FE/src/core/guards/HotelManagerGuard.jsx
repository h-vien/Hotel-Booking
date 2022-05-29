import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";

const HotelManagerGuard = ({ children }) => {
  const isHotelManager = useSelector((state) => state.auth.profile.user.roleId);
  console.log(isHotelManager);
  if (isHotelManager !== 2) {
    toast.error("Bạn không phải là chủ khách sạn");
    return <Redirect to="/" />;
  }
  return <div>{children}</div>;
};

export default HotelManagerGuard;
