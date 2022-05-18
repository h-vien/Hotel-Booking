import { unwrapResult } from "@reduxjs/toolkit";
import { Button, Form, Input, InputNumber, Modal, Select } from "antd";
import { Content } from "antd/lib/layout/layout";
import { Option } from "antd/lib/mentions";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import RoomCardForManager from "../components/RoomCardItem/RoomCardForManager";
import { rules } from "../constant/rules";
import HomeLayout from "../core/layout/HomeLayout";
import { createRoom } from "../slices/room.slice";

const CreateRoom = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.auth.profile);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = async (values) => {
    console.log(values);
    const _data = {
      ...values,
      image:
        "https://media.istockphoto.com/photos/contemporary-modern-luxury-hotel-bedroom-picture-id878400980?b=1&k=20&m=878400980&s=170667a&w=0&h=AG1rdI0mzFsI6z7Sty_NZMayphzuQ3oWvT6VK2U6bU0=",
      hotel_id: profile.hotel.id,
    };
    console.log(_data);
    const res = dispatch(createRoom(_data));
    unwrapResult(res);
    toast.success("Bạn đã đăng kí thành công! Vui lòng đăng nhập để tiếp tục", {
      position: "top-right",
      autoClose: 3000,
    });
    handleCancel();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <HomeLayout>
      <Content className="max-w-6xl mx-auto mt-5">
        <Button type="secondary" className="mb-5" onClick={showModal}>
          Tạo phòng
        </Button>
        <RoomCardForManager />
        <RoomCardForManager />
        <RoomCardForManager />
        <RoomCardForManager />
        <RoomCardForManager />
        <RoomCardForManager />
        <Modal
          title="Tạo phòng"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[null]}
        >
          <Form
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item label="Tên phòng" name="roomName" rules={rules.name}>
              <Input />
            </Form.Item>
            <Form.Item
              label="Mô tả phòng"
              name="description"
              rules={[
                { required: true, message: "Trường này không được bỏ trống" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item>
              <div>
                <Form.Item
                  label="Loại phòng"
                  name="type_id"
                  rules={[
                    {
                      required: true,
                      message: "Trường này không được bỏ trống",
                    },
                  ]}
                  className="mr-4"
                >
                  <Select defaultValue="Loại phòng" style={{ width: 150 }}>
                    <Select.Option value="1">Phòng VIP</Select.Option>
                    <Select.Option value="2">Phòng thường</Select.Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  label="Số giường"
                  name="bed_quantity"
                  rules={[
                    {
                      required: true,
                      message: "Trường này không được bỏ trống",
                    },
                  ]}
                >
                  <Select defaultValue="Số giường" style={{ width: 150 }}>
                    <Select.Option value="1">1 Giường</Select.Option>
                    <Select.Option value="2">2 Giường</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  label="Giá"
                  name="price"
                  rules={[
                    {
                      required: true,
                      message: "Trường này không được bỏ trống",
                    },
                  ]}
                >
                  <InputNumber />
                </Form.Item>
              </div>
            </Form.Item>

            <div className="flex justify-center mt-10 mb-24">
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Tạo phòng
                </Button>
              </Form.Item>
            </div>
          </Form>
        </Modal>
      </Content>
    </HomeLayout>
  );
};

export default CreateRoom;
