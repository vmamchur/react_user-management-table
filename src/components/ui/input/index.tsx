import { FC, InputHTMLAttributes } from "react";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<IInputProps> = ({ ...props }) => {
  return <input {...props} />;
};

export default Input;
