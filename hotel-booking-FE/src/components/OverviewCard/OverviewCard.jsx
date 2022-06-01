import { Typography } from "antd";
import React from "react";

const OverviewCard = ({ label, number }) => {
  return (
    <div
      className=" gutter-row rounded-xl shadow-lg h-48 flex items-center justify-center"
      style={{ background: "#fe843d30" }}
    >
      <div className="flex flex-col items-center">
        <Typography.Text className=" text-3xl font-bold mb-4 text-color-secondary">
          {number}
        </Typography.Text>
        <Typography.Text className="text-xl font-semibold">
          {label}
        </Typography.Text>
      </div>
    </div>
  );
};

export default OverviewCard;
