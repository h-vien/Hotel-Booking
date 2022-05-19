import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Row,
  Typography,
} from "antd";
import { Content } from "antd/lib/layout/layout";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import UploadImage from "../common/UploadImage";
import { rules } from "../constant/rules";
import HomeLayout from "../core/layout/HomeLayout";

const Profile = () => {
  const { user } = useSelector((state) => state.auth.profile);
  const [banner, setBanner] = useState("");
  const [progress, setProgress] = useState(0);
  console.log(user);
  const onFinish = async (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <HomeLayout>
      <Content className="max-w-2xl min-h-screen mx-auto mt-5">
        <Typography.Title className="text-center mt-40">
          Cập nhập trang cá nhân
        </Typography.Title>
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Row gutter={[16, 16]}>
            <Col sm={12}>
              <Form.Item>
                <Form.Item
                  label="Tên tài khoản"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Trường này không được bỏ trống",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Form.Item>
            </Col>
            <Col sm={12}>
              <Row gutter={[16, 16]}>
                <Col sm={12}>
                  <Form.Item
                    label="Họ"
                    name="firstname"
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
                <Col sm={12}>
                  <Form.Item label="Tên" name="lastname" rules={rules.name}>
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col sm={12}>
              <Form.Item
                label="Số điện thoại"
                rules={[
                  {
                    required: true,
                    message: "Trường này không được bỏ trống",
                  },
                ]}
                name="phonenumber"
              >
                <InputNumber />
              </Form.Item>
            </Col>
            <Col sm={12}>
              <Form.Item label="Ngày sinh" name="birthday" rules={rules.name}>
                <DatePicker format="YYYY-MM-DD" />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item label="Ảnh đại diện">
            <UploadImage
              onChange={setBanner}
              setProgress={setProgress}
              progress={progress}
            />
          </Form.Item>
          <div className="flex justify-center my-10">
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Xác nhận
              </Button>
            </Form.Item>
          </div>
        </Form>
      </Content>
    </HomeLayout>
  );
};

export default Profile;
