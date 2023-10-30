import { UserOutlined, LockOutlined } from "@ant-design/icons";

import { ICustomInputProps } from "./Input/Input";

const inputs: ICustomInputProps[] = [
  {
    name: "test input 1",
    id: "1",
    placeholder: "Scrivi qui",
    prefix: <LockOutlined />,
  },
  {
    name: "test input 2",
    id: "2",
    placeholder: "Scrivi qua",
    prefix: <UserOutlined />,
  },
];
export { inputs };
