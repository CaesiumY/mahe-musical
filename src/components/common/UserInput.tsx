import React from "react";

interface UserInputProps {
  label: string;
  id: string;
  type: "text" | "email";
  placeholder: string;
  value: string;
  setValue: (payload: string) => void;
}

const UserInput = ({
  label,
  id,
  type,
  placeholder,
  value,
  setValue,
}: UserInputProps) => {
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor={id} className="font-bold">
        {label}
      </label>
      <input
        className="border border-lightGray rounded-lg p-4 w-full"
        type={type}
        name={id}
        id={id}
        placeholder={`ex) ${placeholder}`}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </div>
  );
};

export default UserInput;
