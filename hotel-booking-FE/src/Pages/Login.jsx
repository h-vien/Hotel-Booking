import { unwrapResult } from "@reduxjs/toolkit";
import { Col, Row } from "antd";
import { Form, Input, Button, Checkbox } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import LocalStorage from "../constant/localStorage";
import { rules } from "../constant/rules";
import { login } from "../slices/auth.slice";
import styles from "../styles/pages/login.module.scss";
import { isEmail } from "../utils/helper";
const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const onFinish = async (values) => {
    console.log("Success:", values);
    const { email, password, remember } = values;
    try {
      const res = await dispatch(login({ email, password }));
      unwrapResult(res);
      console.log(res.payload.data);
      if (remember) {
        localStorage.setItem(
          LocalStorage.user,
          JSON.stringify(res.payload.data)
        );
      }
      history.push("/");
    } catch (error) {}
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <div className="overflow-hidden">
        <Row>
          <Col xl={12}>
            <div className={styles.formContainer}>
              <Form
                className={styles.form}
                name="basic"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item>
                  <div className="text-center flex items-center flex-col justify-center">
                    <h1 className={styles.formHeading}>Chào mừng trở lại</h1>
                    <span>Trải nghiệm của bạn là niềm vui của chúng tôi</span>
                  </div>
                </Form.Item>

                <Form.Item label="Email" name="email" rules={rules.email}>
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Mật khẩu"
                  name="password"
                  rules={rules.password}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item className="mt-6">
                  <div className="flex justify-between items-center">
                    <Form.Item name="remember" valuePropName="checked">
                      <Checkbox>Lưu mật khẩu</Checkbox>
                    </Form.Item>
                    <Form.Item>
                      <div className="flex justify-end">
                        <Button type="primary" htmlType="submit">
                          Login
                        </Button>
                      </div>
                    </Form.Item>
                  </div>
                </Form.Item>
                <div>
                  <span>Bạn chưa có tài khoản?.</span>
                  <Link to="/register">Đăng kí</Link>
                </div>
              </Form>
            </div>
          </Col>
          <Col xl={12}>
            <div className={styles.loginRight}>
              <span>Go happy, go anywhere.</span>
              <h1>Stay here</h1>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Login;
