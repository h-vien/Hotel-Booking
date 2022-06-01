import { unwrapResult } from "@reduxjs/toolkit";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Modal,
  Select,
  Tag,
  Typography,
} from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { toast } from "react-toastify";
import UploadImage from "../../common/UploadImage";
import { typeOfRoom } from "../../constant/common";
import { rules } from "../../constant/rules";
import { deleteRoomById, updateRoomById } from "../../slices/room.slice";
import { formatMoney } from "../../utils/helper";

const RoomCardForManager = ({ room }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleDelete = async (id) => {
    try {
      const res = dispatch(deleteRoomById(id));
      unwrapResult(res);

      toast.success(res.message);
      history.go(0);
    } catch (error) {}
  };
  const [isModalVisible, setIsModalVisible] = useState(false);

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
    const _data = {
      ...values,
      image:
        room.image ||
        "https://res.cloudinary.com/dnykxuaax/image/upload/v1652715094/ibp9pfvutk5uhxmtgeyy.jpg",
      hotel_id: profile.hotel.id,
      id: room.id,
    };
    try {
      try {
        const res = dispatch(updateRoomById(_data));
        unwrapResult(res);
        toast.success("Cập nhập thành công");
        history.go(0);
      } catch (error) {
        console.log(error);
      }
    } catch (error) {}
    handleCancel();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="w-full bg-white rounded-lg cursor-default hover:shadow-md p-4 mb-4 z-0">
      <div className="flex justify-between ">
        <div className="h-40 w-56 mr-4 ">
          <img className="rounded mr-4 inline-block" src={room.image} alt="" />
        </div>
        <div className="flex items-center flex-1 justify-between">
          <div className="flex justify-between items-center w-full ">
            <div className=" w-3/4">
              <Typography.Title>{room.roomName}</Typography.Title>
              <Tag color={typeOfRoom[room.type_id].color}>
                {typeOfRoom[room.type_id].label}
              </Tag>

              <Typography.Text className="my-2 pr-4 block">
                {room.description}
              </Typography.Text>
            </div>
            <div className="w-1/4">
              <Typography.Text className="flex font-medium items-center">
                {room.bed_quantity} giường
              </Typography.Text>
              <Typography.Text className="block text-xl">
                <span className="font-bold text-orange-300">
                  {formatMoney(room.price)} VNĐ
                </span>
              </Typography.Text>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="flex-col items-center ">
              <div className="my-4">
                <Button type="danger" onClick={() => handleDelete(room.id)}>
                  Xóa phòng
                </Button>
              </div>
              <div className="my-4">
                <Button onClick={showModal} type="primary">
                  Sửa phòng
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        title="Sửa phòng"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        destroyOnClose={true}
        footer={[null]}
      >
        <Form
          name="update-room"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          initialValues={room}
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
            <Input.TextArea />
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
                  {
                    type: "number",
                    min: 0,
                    message: "Giá tiền phải lớn hơn 0",
                  },
                ]}
              >
                <InputNumber prefix="VNĐ" className="w-full" />
              </Form.Item>
            </div>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Sửa phòng
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default RoomCardForManager;
