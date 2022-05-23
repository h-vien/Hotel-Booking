import { Button, Col, DatePicker, Form, Row, Select } from "antd";
import qs from "query-string";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { province } from "../../constant/province";
import styles from "./style.module.scss";
const { Option, OptGroup } = Select;

export default function Filter({ filters }) {
  const _filters = {
    ...filters,
  };
  const history = useHistory();
  const onFinish = async (values) => {
    const rangeValue = values["date"];
    const _val = {
      ...values,
      date: [
        rangeValue[0].format("YYYY-MM-DD"),
        rangeValue[1].format("YYYY-MM-DD"),
      ],
    };
    const _filters = {
      checkin_date: _val.date[0],
      checkout_date: _val.date[1],
      province_id: _val.province_id,
      type_room_id: _val.type_room_id,
      bed_quantity: _val.bed_quantity,
      page: 1,
    };
    history.push(`/hotel/search?${qs.stringify(_filters)}`);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    toast.error("Vui lòng nhập thông tin");
  };

  return (
    <div className={styles.filterWrapper}>
      <div className="py-3 flex items-center justify-between text-lg">
        <span className="text-xl">Tìm kiếm theo </span>
      </div>

      <Row>
        <Col span={24} className="m-auto items-center flex flex-col">
          <Form
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item name="province_id" label="Thành phố">
              <Select placeholder="Chọn tỉnh" style={{ width: "100%" }}>
                {province.map((province) => (
                  <Option value={province.id} key={province.id}>
                    {province.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item name="date" label="Ngày đến/ Ngày đi">
              <DatePicker.RangePicker format="YYYY-MM-DD" />
            </Form.Item>
            <Form.Item name="type_room_id" label="Loại phòng">
              <Select placeholder="Chọn  phòng">
                <OptGroup label="Loại phòng">
                  <Select.Option value="1">Phòng Vip</Select.Option>
                  <Select.Option value="2">Phòng thường</Select.Option>
                </OptGroup>
              </Select>
            </Form.Item>
            <Form.Item name="bed_quantity" label="Giường">
              <Select placeholder="Chọn giường">
                <OptGroup label="Số giường">
                  <Select.Option value="1">1 giường</Select.Option>
                  <Select.Option value="2">2 giường</Select.Option>
                </OptGroup>
              </Select>
            </Form.Item>

            <Button type="primary" className="my-8 h-10" htmlType="submit">
              Áp dụng
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
