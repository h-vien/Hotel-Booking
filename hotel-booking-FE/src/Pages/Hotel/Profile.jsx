import { UserOutlined } from "@ant-design/icons";
import { unwrapResult } from "@reduxjs/toolkit";
import {
  Avatar,
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Row,
  Typography,
} from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import UploadImage from "../../common/UploadImage";
import { rules } from "../../constant/rules";
import DashboardLayout from "../../core/layout/Dashboard";
import { updateProfileHotel } from "../../slices/hotel.slice";

const Profile = () => {
  const { hotel, user } = useSelector((state) => state.auth.profile);
  console.log(hotel);
  const [banner, setBanner] = useState("");
  const [progress, setProgress] = useState(0);

  const dispatch = useDispatch();
  const onFinish = async (values) => {
    const _data = {
      ...values,
      image: banner.url || hotel.image,
      id: hotel.id,
      user_id: user.id,
      province_id: hotel.province_id,
    };
    console.log(_data);
    const res = await dispatch(updateProfileHotel(_data));
    unwrapResult(res);
    toast.success("Cập nhập thông tin thành công");
    try {
    } catch (error) {
      console.log(error);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <DashboardLayout>
      <div className="px-8 bg-white h-screen rounded">
        <Typography.Text className="inline-block font-bold text-3xl mt-6 mb-16">
          Chỉnh sửa trang thông tin khách sạn
        </Typography.Text>
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Row>
            <Col sm={18}>
              <Form.Item
                label="Tên Khách sạn"
                name="hotelName"
                initialValue={hotel?.hotelName}
                rules={rules.name}
              >
                <Input />
              </Form.Item>
              <Row gutter={[16, 16]}>
                <Col sm={8}>
                  <Form.Item
                    label="Email"
                    name="hotelEmail"
                    initialValue={hotel?.hotelEmail}
                    rules={rules.email}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col sm={8}>
                  <Form.Item
                    label="Số điện thoại"
                    name="hotelPhone"
                    initialValue={hotel?.hotelPhone}
                    rules={[
                      {
                        required: true,
                        message: "Trường này không được bỏ trống",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col sm={8}>
                  <Form.Item
                    initialValue={hotel?.hotelAddress}
                    label="Địa chỉ"
                    rules={[
                      {
                        required: true,
                        message: "Trường này không được bỏ trống",
                      },
                    ]}
                    name="hotelAddress"
                  >
                    <InputNumber />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={[16, 16]}>
                <Col sm={24}>
                  <Form.Item
                    initialValue={hotel?.hotelDescription}
                    label="Mô tả"
                    rules={rules.textarea}
                    name="hotelDescription"
                  >
                    <Input.TextArea style={{ height: "150px" }} />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
            <Col sm={6}>
              <Avatar
                className="ml-8 mt-12 border border-orange-400"
                src={hotel?.image}
                size={{ lg: 130, xl: 180, xxl: 200 }}
                icon={<UserOutlined />}
              />
              <Form.Item className="ml-16 mt-6">
                <UploadImage
                  onChange={setBanner}
                  setProgress={setProgress}
                  progress={progress}
                />
              </Form.Item>
            </Col>
          </Row>

          <div className="flex justify-center my-10">
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Cập nhập thông tin
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
