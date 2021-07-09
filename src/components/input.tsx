import React from "react";
import "./input.css";

interface Props {
  type: string;
  input: string;
  isValid: boolean;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<Props> = ({
  type,
  input,
  isValid,
  handleInputChange
}) => {
  return (
    <input
      value={input}
      name={type}
      onChange={handleInputChange}
      placeholder={type}
      type={type}
      className={isValid ? "valid" : "notValid"}
    />
  );
};
