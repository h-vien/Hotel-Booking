import { unwrapResult } from "@reduxjs/toolkit";
import { Button, Form, Input, Select } from "antd";
import { Content } from "antd/lib/layout/layout";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import UploadImage from "../common/UploadImage";
import { province } from "../constant/province";
import { rules } from "../constant/rules";
import HomeLayout from "../core/layout/HomeLayout";
import { registerMember } from "../slices/auth.slice";
import styles from "../styles/pages/login.module.scss";
const RegisterMember = () => {
  const [banner, setBanner] = useState("");
  const [progress, setProgress] = useState(0);
  const userId = useSelector((state) => state.auth.profile.user.id);

  const dispatch = useDispatch();
  const history = useHistory();
  const onFinish = async (values) => {
    const province = values["province_id"];
    const _data = {
      ...values,
      province_id: String(province),
      user_id: String(userId),
      image: banner?.url || banner,
    };
    const _registerMember = async () => {
      try {
        const res = await dispatch(registerMember(_data));
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
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleDefaultBanner = () => {
    setBanner(
      "https://res.cloudinary.com/dnykxuaax/image/upload/v1652715094/ibp9pfvutk5uhxmtgeyy.jpg"
    );
    setProgress(100);
  };
  return (
    <HomeLayout>
      <Content className="max-w-6xl mx-auto mt-5">
        <div className="w-full h-auto rounded-lg shadow-lg">
          <div className="px-24 py-5">
            <div className="text-center flex items-center flex-col justify-center">
              <h1 className="text-5xl font-bold mb-4">Đăng kí thành viên </h1>
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
                      label="Thành phố"
                      name="province_id"
                      rules={[
                        {
                          required: true,
                          message: "Trường này không được bỏ trống",
                        },
                      ]}
                    >
                      <Select
                        placeholder="Chọn tỉnh/thành phố"
                        style={{ width: 150 }}
                        className="register-member__select"
                      >
                        {province.map((province) => (
                          <Select.Option value={province.id} key={province.id}>
                            {province.name}
                          </Select.Option>
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
                  rules={[
                    {
                      required: true,
                      message: "Trường này không được bỏ trống",
                    },
                  ]}
                  validateStatus="error"
                >
                  <Input.TextArea />
                </Form.Item>
                <Form.Item>
                  <div className="flex justify-between">
                    <UploadImage
                      onChange={setBanner}
                      setProgress={setProgress}
                      progress={progress}
                    />
                    <Button onClick={handleDefaultBanner}>
                      Hình ảnh mặc định
                    </Button>
                  </div>
                </Form.Item>
                <div className="flex justify-center mt-10 mb-24">
                  <Form.Item>
                    {progress === 100 ? (
                      <Button type="primary" htmlType="submit">
                        Đăng kí thành viên
                      </Button>
                    ) : (
                      <Button type="primary" htmlType="submit" disabled>
                        Đăng kí thành viên
                      </Button>
                    )}
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
