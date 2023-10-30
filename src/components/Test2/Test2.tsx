import { Button, Form, Input } from "antd";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
  firstName: string;
  lastName: string;
}

export default function Test2() {
  const { handleSubmit, control } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <Form onFinish={handleSubmit(onSubmit)}>
      <Form.Item label="First name">
        <Controller
          name="firstName"
          control={control}
          defaultValue=""
          rules={{ required: "First name is required" }}
          render={({ field }) => <Input {...field} />}
        />
      </Form.Item>

      <Form.Item label="Last Name">
        <Controller
          name="lastName"
          control={control}
          defaultValue=""
          rules={{ required: "Last name is required" }}
          render={({ field }) => <Input {...field} />}
        />
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
}
