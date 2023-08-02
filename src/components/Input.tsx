import React from "react";
type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const Input = ({ value, handleChange }: InputProps) => {
  //   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     console.log(event.target.value);
  //   };
  return (
    <input
      type="text"
      name=""
      id=""
      value={value}
      //   onChange={handleInputChange}
      onChange={handleChange}
    />
  );
};

export default Input;
