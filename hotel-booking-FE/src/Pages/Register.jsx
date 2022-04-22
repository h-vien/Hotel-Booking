import { Row, Col, Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
import styles from "../styles/pages/login.module.scss";

const Register = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
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
                <h1 className={styles.formHeading}>Create an account</h1>
              </div>
            </Form.Item>
            <Form.Item>
              <div className={styles.formInputName}>
                <Form.Item
                  label="First Name"
                  name="firstName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your first name!",
                    },
                  ]}
                  className="mr-4"
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Last name"
                  name="lastName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your last name!",
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
                  message: "Please input your email!",
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
            <Form.Item
              label="Confirm Password"
              name="cfrmPassword"
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <div className="flex justify-center">
                <Button type="primary" htmlType="submit">
                  Sign up
                </Button>
              </div>
            </Form.Item>
            <div>
              <span>You do have an account.</span>
              <Link to="/login">Login</Link>
            </div>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default Register;
