import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";

const AdminGuard = ({ children }) => {
  const isAdmin = useSelector((state) => state.auth.profile.id);
  if (isAdmin !== 0) {
    toast.error("Bạn không phải là admin");
    return <Redirect to="/" />;
  }
  return <div>{children}</div>;
};

export default AdminGuard;
