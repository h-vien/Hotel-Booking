import { HomeOutlined } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  Col,
  DatePicker,
  Form,
  Input,
  Row,
  Typography,
} from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import RatingStars from "../RatingStars/RatingStars";
import styles from "./style.module.scss";

export default function Filter() {
  const [form] = Form.useForm();
  const [searchValue, setSearchValue] = useState("");
  const [date, setDate] = useState([]);

  const onSearch = (e) => {
    setSearchValue(e.target.value);
  };

  function onChange(value, dateString) {
    setDate(dateString);
  }

  const onFinish = (values) => {
    console.log(values);
  };
  function HandleCheckBox(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  return (
    <div className={styles.filterWrapper}>
      <Form form={form} name="filter" layout="vertical" onFinish={onFinish}>
        <div className="py-3 flex items-center justify-between text-lg">
          <span className="text-xl">Tìm kiếm theo </span>
          <span className={styles.filterBtnDelete}>Xoá</span>
        </div>

        <Row>
          <Col span={24} className="m-auto items-center flex flex-col">
            <div>
              <span className="py-2 inline-block">Địa điểm</span>
              <Input
                placeholder="Nhập địa điểm"
                size="large"
                icon={<HomeOutlined />}
                onChange={onSearch}
                onPressEnter={onSearch}
              />
            </div>
            <div className="mt-4">
              <span className="py-2 inline-block">Ngày nhận/ trả phòng</span>
              <DatePicker.RangePicker format="YYYY-MM-DD" onChange={onChange} />
            </div>
            <div className="mt-4">
              <span className="py-2 inline-block">Lọc theo giá</span>
              <Row>
                <Col span={24}>
                  <Checkbox onChange={HandleCheckBox}>
                    1.000.000 - 5.000.000
                  </Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox onChange={HandleCheckBox}>
                    500.000 - 1.000.000
                  </Checkbox>
                </Col>
                <Col span={24}>
                  <Checkbox onChange={HandleCheckBox}> dưới 500.000</Checkbox>
                </Col>
              </Row>
            </div>
            <div className="mt-4">
              <span className="py-2 inline-block">Lọc theo sao</span>
              <RatingStars />
            </div>
            <Button
              htmlType="submit"
              type="primary"
              className="text-center my-4"
            >
              <Link to="/search/?q=hoian">Áp dụng</Link>
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
