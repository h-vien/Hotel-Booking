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
  Radio,
  Row,
  Typography,
} from "antd";
import moment from "moment";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UploadImage from "../../common/UploadImage";
import { rules } from "../../constant/rules";
import { updateMe } from "../../slices/auth.slice";
import { formatDate } from "../../utils/helper";
import User from "./User";

const Profile = () => {
  const { user } = useSelector((state) => state.auth.profile);

  const [banner, setBanner] = useState("");
  const [progress, setProgress] = useState(0);

  const dispatch = useDispatch();
  const onFinish = async (values) => {
    const birthday = values["birthday"].format("YYYY-MM-DD");
    const _data = {
      ...values,
      birthday: birthday,
      image: banner.url || user.image,
      id: user.id,
    };
    const res = await dispatch(updateMe(_data));
    unwrapResult(res);
    try {
    } catch (error) {
      console.log(error);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <User>
      <div className="px-8 bg-white h-screen rounded">
        <Typography.Text className="inline-block font-bold text-3xl mt-6 mb-16">
          Chỉnh sửa trang cá nhân
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
                label="Tên tài khoản"
                name="username"
                initialValue={user?.username}
                rules={rules.userName}
              >
                <Input />
              </Form.Item>
              <Row gutter={[16, 16]}>
                <Col sm={12}>
                  <Form.Item
                    label="Họ"
                    name="firstName"
                    initialValue={user.firstName}
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
                  <Form.Item
                    label="Tên"
                    name="lastName"
                    initialValue={user.lastName}
                    rules={rules.name}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={[16, 16]}>
                <Col sm={12}>
                  <Form.Item
                    initialValue={user?.phoneNumber}
                    label="Số điện thoại"
                    rules={[
                      {
                        required: true,
                        message: "Trường này không được bỏ trống",
                      },
                    ]}
                    name="phoneNumber"
                  >
                    <InputNumber />
                  </Form.Item>
                </Col>
                <Col sm={12}>
                  <Row>
                    <Col sm={12}>
                      <Form.Item
                        label="Ngày sinh"
                        name="birthday"
                        rules={[
                          {
                            required: true,
                            message: "Trường này không được bỏ trống",
                          },
                        ]}
                      >
                        <DatePicker
                          defaultValue={
                            user.birthday &&
                            moment(formatDate(user.birthday, "YYYY-MM-DD"))
                          }
                          format="YYYY-MM-DD"
                        />
                      </Form.Item>
                    </Col>
                    <Col sm={12}>
                      <div className="flex items-center h-full justify-center">
                        <Form.Item
                          label="Giới tính"
                          name="gender"
                          initialValue={user?.gender}
                        >
                          <Radio.Group value={true}>
                            <Radio value={true}>Nam</Radio>
                            <Radio value={false}>Nữ</Radio>
                          </Radio.Group>
                        </Form.Item>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col sm={6}>
              <Avatar
                className="ml-8 mt-6 border border-orange-400"
                src={user?.image}
                size={{ lg: 130, xl: 160, xxl: 180 }}
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
    </User>
  );
};

export default Profile;
