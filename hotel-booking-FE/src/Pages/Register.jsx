import { unwrapResult } from "@reduxjs/toolkit";
import { Button, Col, Form, Input, Row } from "antd";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { register } from "../slices/auth.slice";
import styles from "../styles/pages/login.module.scss";

const Register = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const onFinish = async (values) => {
    console.log("Success:", values);

    const { fisrtName, lastName, email, password } = values;
    const data = { fisrtName, lastName, email, password };
    console.log(data);
    try {
      const res = await dispatch(register(data));
      unwrapResult(res);
      console.log(res);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Row>
      <Col xl={12}>
        <div className={styles.registerLeft}></div>
      </Col>
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
                <h1 className={styles.formHeading}>Tạo tài khoản </h1>
              </div>
            </Form.Item>
            <Form.Item>
              <div className={styles.formInputName}>
                <Form.Item
                  label="Họ"
                  name="fisrtName"
                  rules={[
                    {
                      required: true,
                      message: " Trường này không được trống",
                    },
                  ]}
                  className="mr-4"
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Tên"
                  name="lastName"
                  rules={[
                    {
                      required: true,
                      message: "Trường này không được trống!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </div>
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập email!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Mật khẩu"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Mật khẩu không được trống!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              label="Xác nhận mật khẩu"
              name="cfrmPassword"
              rules={[
                {
                  required: true,
                  message: "Bạn phải xác nhận mật khẩu",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <div className="flex justify-center">
                <Button type="primary" htmlType="submit">
                  Đăng kí
                </Button>
              </div>
            </Form.Item>
            <div>
              <span>Bạn đã có tài khoản?</span>
              <Link to="/login">Đăng nhập</Link>
            </div>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default Register;
