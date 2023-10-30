import { FC } from "react";
import { ICustomInputProps, Input } from "../Input/Input";

import styles from "./InputGroup.module.scss";
import { Form } from "antd";

export interface ICustomInputGroupProps {
  inputs: ICustomInputProps[];
}

// const InputGroup: FC<ICustomInputGroupProps> = ({ inputs }) => {
//   return (
//     <div className={styles["input-group"]}>
//       {inputs.map((input) => (
//         <Input {...input} key={input.id} />
//       ))}
//     </div>
//   );
// };

const InputGroup: FC<ICustomInputGroupProps> = ({ inputs }) => {
  return (
    <div className={styles["input-group"]}>
      {inputs.map((input) => (
        <Form.Item name={input.name} key={input.id}>
          <Input {...input} />
        </Form.Item>
      ))}
    </div>
  );
};

export { InputGroup };
