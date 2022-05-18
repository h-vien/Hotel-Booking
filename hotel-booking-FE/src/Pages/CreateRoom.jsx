import { unwrapResult } from "@reduxjs/toolkit";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Modal,
  Pagination,
  Select,
} from "antd";
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
  const [currPage, setCurrPage] = useState(1);
  const [progress, setProgress] = useState(0);
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

    toast.success("Tạo phòng thành công", {
      position: "top-right",
      autoClose: 3000,
    });
    handleCancel();
  };
  useEffect(() => {
    const params = {
      hotel_id: profile.hotel.id,
      page: currPage,
    };
    const _getRooms = async () => {
      const _data = await dispatch(getRoomByHotelId({ params }));
      const res = unwrapResult(_data);
      const toJSON = convertToJSON(res.data);
      setRoomList(toJSON.rooms);
    };
    _getRooms();
  }, [currPage, dispatch, profile.hotel.id]);

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  console.log(roomList);
  const onShowSizeChange = (curr, pgSize) => {
    console.log({ curr, pgSize }, "hehe");
    setCurrPage(curr);
  };
  return (
    <HomeLayout>
      <Content className="max-w-6xl mx-auto mt-5">
        <div className="flex justify-between mb-5">
          <Button type="secondary" onClick={showModal}>
            Tạo phòng
          </Button>
          <Pagination
            simple
            defaultCurrent={1}
            total={20}
            onChange={onShowSizeChange}
          />
        </div>
        {roomList?.[0] &&
          roomList.map((room) => (
            <RoomCardForManager key={room.id} room={room} />
          ))}

        <Modal
          title="Tạo phòng"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          destroyOnClose={true}
          footer={[null]}
        >
          <Form
            name="create-room"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            initialValues={{
              remember: true,
            }}
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
              <UploadImage
                onChange={setBanner}
                setProgress={setProgress}
                progress={progress}
              />
            </Form.Item>
            <div className="flex justify-center mt-1 mb-0">
              <Form.Item>
                {progress === 100 ? (
                  <Button type="primary" htmlType="submit">
                    Tạo phòng
                  </Button>
                ) : (
                  <Button type="primary" htmlType="submit" disabled>
                    Tạo phòng
                  </Button>
                )}
              </Form.Item>
            </div>
          </Form>
        </Modal>
      </Content>
    </HomeLayout>
  );
};

export default CreateRoom;
