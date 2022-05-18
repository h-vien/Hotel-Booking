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
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { toast } from "react-toastify";
import UploadImage from "../common/UploadImage";
import RoomCardForManager from "../components/RoomCardItem/RoomCardForManager";
import { rules } from "../constant/rules";
import HomeLayout from "../core/layout/HomeLayout";
import { createRoom, getRoomByHotelId } from "../slices/room.slice";

const CreateRoom = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [roomList, setRoomList] = useState([]);
  const [paginate, setPaginate] = useState({});
  const [banner, setBanner] = useState("");
  const [currPage, setCurrPage] = useState(1);
  const [progress, setProgress] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory();
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
    console.log(banner);

    const _data = {
      ...values,
      image:
        banner.url ||
        "https://res.cloudinary.com/dnykxuaax/image/upload/v1652715094/ibp9pfvutk5uhxmtgeyy.jpg",
      hotel_id: profile.hotel.id,
    };
    try {
      const res = dispatch(createRoom(_data));
      unwrapResult(res);
      history.go(0);
    } catch (error) {
      console.log(error);
    }

    toast.success("Tạo phòng thành công", {
      position: "top-right",
      autoClose: 3000,
    });
    handleCancel();
  };
  useEffect(() => {
    console.log("render");
    const params = {
      hotel_id: profile.hotel.id,
      page: currPage,
    };
    const _getRooms = async () => {
      const _data = await dispatch(getRoomByHotelId({ params }));
      const res = unwrapResult(_data);
      setPaginate(res.data);
      setRoomList(res.data.rooms);
    };
    _getRooms();
  }, [currPage, dispatch, profile.hotel.id]);
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onShowSizeChange = (curr, pgSize) => {
    console.log(pgSize, curr);
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
            current={currPage}
            total={
              paginate.totalPage * paginate.maxPageItem !== 0
                ? paginate.totalPage * paginate.maxPageItem
                : 1
            }
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
