import { InputProps } from "antd";
import { FC } from "react";
import { Input as AntInput } from "antd";

import styles from "./Input.module.scss";

export interface ICustomInputProps extends InputProps {}

const Input: FC<ICustomInputProps> = (props) => {
  return (
    <div className={styles["input-wrapper"]}>
      <AntInput className={styles["input"]} {...props} />
    </div>
  );
};

export { Input };
