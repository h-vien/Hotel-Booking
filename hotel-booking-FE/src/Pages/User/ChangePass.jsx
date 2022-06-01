import { unwrapResult } from "@reduxjs/toolkit";
import { Button, Form, Input, Typography } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { rules } from "../../constant/rules";
import { changePassword } from "../../slices/auth.slice";
import User from "./User";
const ChangePass = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [error, setError] = useState("");
  const { user } = useSelector((state) => state.auth.profile);
  const onFinish = async (values) => {
    delete values.confirm;
    const _data = {
      ...values,
      id: String(user.id),
    };
    try {
      const res = await dispatch(changePassword(_data));
      unwrapResult(res);
      toast.success("Cập nhập mật khẩu thành công");
      history.push("/");
    } catch (error) {
      if (error.status === 405) {
        setError(error.data.message);
      }
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <User>
      <div className="px-8 bg-white h-screen rounded">
        <Typography.Title level={3} className="pt-5">
          Đơn đã đặt
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
          <Form.Item
            label="Mật khẩu cũ"
            name="old_password"
            rules={rules.password}
            help={error || null}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Mật khẩu mới"
            name="new_password"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập mật khẩu mới!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("old_password") === value) {
                    return Promise.reject(
                      new Error("Mật khẩu mới trùng với mật khẩu cũ")
                    );
                  }
                  return Promise.resolve();
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="confirm"
            label="Xác nhận mật khẩu"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Vui lòng xác nhận mật khẩu!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("new_password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Mật khẩu không khớp"));
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <div className="flex justify-center mt-6">
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Đổi mật khẩu
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </User>
  );
};

export default ChangePass;
