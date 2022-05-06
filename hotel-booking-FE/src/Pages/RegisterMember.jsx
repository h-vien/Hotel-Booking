import HomeLayout from "../core/layout/HomeLayout";
import { Content } from "antd/lib/layout/layout";
import { Button, Form, Input, message } from "antd";
import { rules } from "../constant/rules";
import styles from "../styles/pages/login.module.scss";
import Dragger from "antd/lib/upload/Dragger";
import { InboxOutlined } from "@ant-design/icons";
const RegisterMember = () => {
  const onFinish = async (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const props = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
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
                  name="hotel_name"
                  rules={rules.name}
                >
                  <Input />
                </Form.Item>
                <Form.Item label="Email" name="hotel_email" rules={rules.email}>
                  <Input />
                </Form.Item>
                <Form.Item>
                  <div className={styles.formInputName}>
                    <Form.Item
                      label="Số điện thoại"
                      name="hotel_phone"
                      rules={[{ required: true }]}
                      className="mr-4"
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      label="Địa chỉ"
                      name="hotel_address"
                      rules={rules.name}
                    >
                      <Input />
                    </Form.Item>
                  </div>
                </Form.Item>

                <Form.Item
                  label="Mô tả khách sạn"
                  name="hotel_desc"
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
