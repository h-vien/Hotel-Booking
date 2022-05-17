import { unwrapResult } from "@reduxjs/toolkit";
import { Button, Form, Input, InputNumber, Modal, Select } from "antd";
import { Content } from "antd/lib/layout/layout";
import { Option } from "antd/lib/mentions";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import UploadImage from "../common/UploadImage";
import RoomCardForManager from "../components/RoomCardItem/RoomCardForManager";
import { rules } from "../constant/rules";
import HomeLayout from "../core/layout/HomeLayout";
import { createRoom, getRoomByHotelId } from "../slices/room.slice";
import { convertToJSON } from "../utils/helper";

const CreateRoom = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [roomList, setRoomList] = useState([]);
  const [banner, setBanner] = useState("");

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
      image: banner.url,
      hotel_id: profile.hotel.id,
    };
    console.log(_data);
    const res = dispatch(createRoom(_data));
    unwrapResult(res);
    _getRooms();

    toast.success("Tạo phòng thành công", {
      position: "top-right",
      autoClose: 3000,
    });
    handleCancel();
  };
  useEffect(() => {
    _getRooms();
  }, []);
  const params = {
    hotel_id: profile.hotel.id,
    page: 1,
  };
  const _getRooms = async () => {
    const _data = await dispatch(getRoomByHotelId({ params }));
    const res = unwrapResult(_data);
    const toJSON = convertToJSON(res.data);
    setRoomList(toJSON.rooms);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  console.log(roomList);
  return (
    <HomeLayout>
      <Content className="max-w-6xl mx-auto mt-5">
        <Button type="secondary" className="mb-5" onClick={showModal}>
          Tạo phòng
        </Button>
        {roomList?.[0] &&
          roomList.map((room) => (
            <RoomCardForManager key={room.id} room={room} />
          ))}

        <Modal
          title="Tạo phòng"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[null]}
        >
          <Form
            name="create-room"
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
                >
                  <Select placeholder="Loại phòng">
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
                  <Select placeholder="Số giường">
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
            <Form.Item>
              <UploadImage onChange={setBanner} />
            </Form.Item>
            <div className="flex justify-center mt-1 mb-0">
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
