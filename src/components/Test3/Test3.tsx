import { Form, /* Input, */ Button, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Input } from "./Input/Input";
import { InputGroup } from "./InputGroup/InputGroup";
import { inputs } from "./inputConfig";

const DemoForm = () => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
    message.success("Form submitted successfully!");
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <InputGroup
        // inputs={[
        //   {
        //     name: "test input 1",
        //     id: "1",
        //     placeholder: "Scrivi qui",
        //     prefix: <LockOutlined />,
        //   },
        //   {
        //     name: "test input 2",
        //     id: "2",
        //     placeholder: "Scrivi qua",
        //     prefix: <UserOutlined />,
        //   },
        // ]}
        inputs={inputs}
      />

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default DemoForm;
