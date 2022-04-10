import React from "react";

interface ButtonGroupProps {
  selected: string;
  onChangeRadio: (e: React.ChangeEvent<HTMLInputElement>) => void;
  data: string[];
}

const ButtonGroup = ({ selected, onChangeRadio, data }: ButtonGroupProps) => {
  return (
    <section className="flex flex-row gap-3 my-6 font-semibold text-sm">
      {data.map((time, index) => (
        <React.Fragment key={time}>
          <input
            type="radio"
            name="time"
            id={time}
            value={time}
            className="hidden"
            onChange={onChangeRadio}
          />
          <label
            htmlFor={time}
            className={`cursor-pointer basis-1/2 border-2 rounded-lg text-center py-3 ${
              selected === time
                ? "text-navy border-navy"
                : "text-lightGray border-lightGray"
            }`}
          >
            {`${index + 1}회 ${time.slice(0, 2)}:${time.slice(2)}`}
          </label>
        </React.Fragment>
      ))}
    </section>
  );
};

export default ButtonGroup;
