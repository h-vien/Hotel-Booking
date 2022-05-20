import { unwrapResult } from "@reduxjs/toolkit";
import { Button, Col, Form, Input, Row } from "antd";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { rules } from "../constant/rules";
import { register } from "../slices/auth.slice";
import styles from "../styles/pages/login.module.scss";

const Register = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const onFinish = async (values) => {
    console.log("Success:", values);

    const { firstName, lastName, email, password } = values;
    const data = { firstName, lastName, email, password };
    try {
      const res = await dispatch(register(data));
      unwrapResult(res);
      toast.success(
        "Bạn đã đăng kí thành công! Vui lòng đăng nhập để tiếp tục",
        {
          position: "top-right",
          autoClose: 3000,
        }
      );
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
                  name="firstName"
                  rules={rules.name}
                  className="mr-4"
                >
                  <Input />
                </Form.Item>
                <Form.Item label="Tên" name="lastName" rules={rules.name}>
                  <Input />
                </Form.Item>
              </div>
            </Form.Item>

            <Form.Item label="Email" name="email" rules={rules.email}>
              <Input />
            </Form.Item>
            <Form.Item label="Mật khẩu" name="password" rules={rules.password}>
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
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Mật khẩu không khớp"));
                  },
                }),
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
