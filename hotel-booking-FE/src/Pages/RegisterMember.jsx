import HomeLayout from "../core/layout/HomeLayout";
import { Content } from "antd/lib/layout/layout";
import { Button, Form, Input, message, Select } from "antd";
import { rules } from "../constant/rules";
import styles from "../styles/pages/login.module.scss";
import Dragger from "antd/lib/upload/Dragger";
import { InboxOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { province } from "../constant/province";
import { Option } from "antd/lib/mentions";
import { registerMember } from "../slices/auth.slice";
import { useDispatch, useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import LocalStorage from "../constant/localStorage";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
const RegisterMember = () => {
  const [provinceId, setProvinceId] = useState();
  const [data, setData] = useState({});
  const userId = useSelector((state) => state.auth.profile.user.id);
  console.log(userId);
  const onFinish = async (values) => {
    const _data = {
      ...values,
      province_id: provinceId,
      user_id: userId,
      image:
        "https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    };
    setData(_data);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  function handleAddressChange(value) {
    console.log(value);
    setProvinceId(value);
  }

  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    const _registerMember = async () => {
      try {
        const res = await dispatch(registerMember(data));
        unwrapResult(res);
        history.push("/");
        toast.success("Chúc mừng bạn đã trở thành thành viên của chúng tôi", {
          position: "top-right",
          autoClose: 3000,
        });
      } catch (error) {
        console.log(error);
      }
    };
    _registerMember();
  }, [dispatch, data]);
  const props = {
    name: "file",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };
  return (
    <HomeLayout>
      <Content className="max-w-6xl mx-auto mt-5">
        <div className="w-full h-auto rounded-lg shadow-lg">
          <div className="px-24 py-5">
            <div className="text-center flex items-center flex-col justify-center">
              <h1 className="text-3xl mb-20 font-bold">Đăng kí thành viên </h1>
            </div>
            <div className={styles.formRegisterMemberContainer}>
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
                <Form.Item
                  label="Tên khách sạn"
                  name="hotelName"
                  rules={rules.name}
                >
                  <Input />
                </Form.Item>
                <Form.Item label="Email" name="hotelEmail" rules={rules.email}>
                  <Input />
                </Form.Item>

                <Form.Item>
                  <div className={styles.formInputName}>
                    <Form.Item
                      label="Số điện thoại"
                      name="hotelPhone"
                      rules={[{ required: true }]}
                      className="mr-4"
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item label="Thành phố">
                      <Select
                        defaultValue={province[0].name}
                        style={{ width: 150 }}
                        onChange={handleAddressChange}
                      >
                        {province.map((province) => (
                          <Option value={province.id} key={province.id}>
                            {province.name}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                    <Form.Item
                      label="Địa chỉ"
                      name="hotelAddress"
                      rules={rules.name}
                    >
                      <Input />
                    </Form.Item>
                  </div>
                </Form.Item>

                <Form.Item
                  label="Mô tả khách sạn"
                  name="hotelDescription"
                  rules={[{ required: true }]}
                  validateStatus="error"
                >
                  <Input.TextArea />
                </Form.Item>
                <div className="w-3/4">
                  <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">
                      Click or drag file to upload image
                    </p>
                  </Dragger>
                </div>
                <div className="flex justify-center mt-10 mb-24">
                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      Đăng kí thành viên
                    </Button>
                  </Form.Item>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </Content>
    </HomeLayout>
  );
};

export default RegisterMember;
