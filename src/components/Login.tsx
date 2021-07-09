import React, { useState, useEffect } from "react";
import { Button } from "./button";
import { Input } from "./input";

export const Login: React.FC = () => {
  const [input, setInput] = useState<{ email: string; password: string }>({
    email: "",
    password: ""
  });
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  useEffect(() => {
    if (input.password.length >= 1) {
      input.password.length < 6
        ? setIsPasswordValid(false)
        : setIsPasswordValid(true);
    } else setIsPasswordValid(true);
    if (input.email.length >= 1) {
      !input.email.includes("@")
        ? setIsEmailValid(false)
        : setIsEmailValid(true);
    }
  }, [input]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value
      };
    });
  };

  return (
    <>
      <Input
        input={input.email}
        handleInputChange={handleInputChange}
        type={"email"}
        isValid={isEmailValid}
      />
      <Input
        input={input.password}
        handleInputChange={handleInputChange}
        type={"password"}
        isValid={isPasswordValid}
      />
      <Button>Submit</Button>
    </>
  );
};
