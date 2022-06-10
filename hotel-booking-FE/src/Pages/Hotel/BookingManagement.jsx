import { Tabs } from "antd";
import { Content } from "antd/lib/layout/layout";
import qs from "query-string";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import TabContent from "../../components/PurchaseStatus/TabContent";
import useQuery from "../../core/hooks/useQuery";
import DashboardLayout from "../../core/layout/Dashboard";
const BookingManagement = () => {
  const { hotel } = useSelector((state) => state.auth.profile);
  const history = useHistory();
  const handleClick = async (e) => {
    const _filters = {
      page: 1,
      hotel_id: hotel.id,
      status: e,
    };
    history.push(
      `/dashboard/booking-management/hotel?${qs.stringify(_filters)}`
    );
  };
  const query = useQuery();
  return (
    <DashboardLayout>
      <Content className="max-w-6xl min-h-screen mx-auto mt-5">
        <Tabs
          defaultActiveKey={query.status || 0}
          onChange={handleClick}
          className="mt-14"
        >
          <Tabs.TabPane tab="Chờ xác nhận" key="0">
            <TabContent />
          </Tabs.TabPane>
          <Tabs.TabPane tab=" Đã xác nhận" key="1">
            <TabContent />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Chờ thanh toán" key="2">
            <TabContent />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Đã thanh toán" key="3">
            <TabContent />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Đã Hủy" key="4">
            <TabContent />
          </Tabs.TabPane>
        </Tabs>
      </Content>
    </DashboardLayout>
  );
};

export default BookingManagement;
