import { Button, Col, Form, Input, Row } from "antd";
import { Content } from "antd/lib/layout/layout";
import React from "react";
import Filter from "../components/Filter/Filter";
import { rules } from "../constant/rules";
import HomeLayout from "../core/layout/HomeLayout";
import styles from "../styles/pages/login.module.scss";

const RoomDetail = () => {
  const onFinish = async (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <HomeLayout>
      <Content className="max-w-6xl mx-auto mt-5">
        <Row gutter={[16, 16]}>
          <Col span={6}>
            <Filter />
          </Col>
          <Col span={18}>
            <div className="bg-white">
              <div className={`${styles.formRegisterMemberContainer} flex-col`}>
                <h1 className="text-3xl font-bold mt-12">
                  Hoàn tất thông tin để đặt vé
                </h1>
                <Form
                  className={styles.formRegisterMember}
                  name="basic"
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item>
                    <div className={styles.formInputName}>
                      <Form.Item
                        label="Phòng"
                        name="room_id"
                        rules={[
                          {
                            required: true,
                            message: "Trường này không được bỏ trống",
                          },
                        ]}
                        className="mr-4"
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        label="Năm sinh"
                        name="user_birthday"
                        className="mr-4"
                        rules={rules.name}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        label="Họ và tên"
                        name="user_name"
                        rules={rules.name}
                      >
                        <Input />
                      </Form.Item>
                    </div>
                    <div className={`${styles.formInputName} mt-2`}>
                      <Form.Item
                        label="Số điện thoại"
                        rules={[
                          {
                            required: true,
                            message: "Trường này không được bỏ trống",
                          },
                        ]}
                        className="mr-4"
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        label="CCCD/CMND"
                        name="user_cccd"
                        rules={rules.name}
                      >
                        <Input />
                      </Form.Item>
                    </div>
                  </Form.Item>

                  <Form.Item
                    label="Email"
                    name="user_email"
                    rules={rules.email}
                    validateStatus="error"
                  >
                    <Input />
                  </Form.Item>

                  <div className="flex justify-center my-10">
                    <Form.Item>
                      <Button type="primary" htmlType="submit">
                        Xác nhận
                      </Button>
                    </Form.Item>
                  </div>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Content>
    </HomeLayout>
  );
};

export default RoomDetail;
