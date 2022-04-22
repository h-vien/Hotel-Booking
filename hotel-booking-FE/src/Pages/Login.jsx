import { Col, Row } from "antd";
import { Form, Input, Button, Checkbox } from "antd";
import { Link } from "react-router-dom";
import styles from "../styles/pages/login.module.scss";
const Login = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
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
                    <h1 className={styles.formHeading}>Welcome back</h1>
                    <span>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </span>
                  </div>
                </Form.Item>
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item className="mt-6">
                  <div className="flex justify-between items-center">
                    <Form.Item name="remember" valuePropName="checked">
                      <Checkbox>Remember me</Checkbox>
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
                  <span>You do not have an account yet?.</span>
                  <Link to="/register">Sign up</Link>
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
