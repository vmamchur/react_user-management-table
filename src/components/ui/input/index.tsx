import { FC, InputHTMLAttributes } from "react";

import styles from './styles.module.scss';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<IInputProps> = ({ ...props }) => {
  return <input {...props} className={styles.input} />;
};

export default Input;
