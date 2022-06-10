import { unwrapResult } from "@reduxjs/toolkit";
import { Col, Progress, Row, Select, Typography } from "antd";
import { Content } from "antd/lib/layout/layout";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import OverviewCard from "../../components/OverviewCard/OverviewCard";
import DashboardLayout from "../../core/layout/Dashboard";
import { getStats } from "../../slices/booking.slice";
import { formatMoney } from "../../utils/helper";
import ChartView from "../ChartView";
const Overview = () => {
  const dispatch = useDispatch();
  const { hotel } = useSelector((state) => state.auth.profile);
  const [stats, setStats] = useState([]);
  const [month, setMonth] = useState(1);
  useEffect(() => {
    const _getStats = async () => {
      const params = {
        month: month,
        hotel_id: hotel.id,
      };
      try {
        const _data = await dispatch(getStats({ params }));
        const res = unwrapResult(_data);
        setStats(res.data);
      } catch (error) {}
    };
    _getStats();
  }, [month]);
  console.log(stats);
  const handleMonthChange = (e) => {
    setMonth(e);
  };
  const percentOfTicket = stats.paid / stats.tickets;
  return (
    <DashboardLayout>
      <Content className="max-w-6xl min-h-screen mx-auto mt-5">
        <Select
          onChange={handleMonthChange}
          placeholder={`Tháng ${month}`}
          style={{ width: "180px", marginBottom: "24px" }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((month) => (
            <Select.Option value={month} key={month}>
              Tháng {month}
            </Select.Option>
          ))}
        </Select>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <OverviewCard label="Vé được đặt" number={stats.tickets} />
          </Col>
          <Col span={8}>
            <OverviewCard
              label="Doanh thu"
              number={`${formatMoney(stats.totalprice)} VND`}
            />
          </Col>
          <Col span={8}>
            <div
              style={{ background: "#fe843d30" }}
              className="gutter-row rounded-xl shadow-lg h-48 items-center flex justify-center"
            >
              <div className="flex flex-col items-center">
                <Progress
                  type="circle"
                  strokeColor="#fe843d"
                  percent={percentOfTicket * 100}
                />
                <Typography.Text className="mt-2 font-semibold text-xl">
                  Tỉ lệ phòng đặt thành công
                </Typography.Text>
              </div>
            </div>
          </Col>
        </Row>
        <ChartView stats={stats} month={month} />
      </Content>
    </DashboardLayout>
  );
};

export default Overview;
