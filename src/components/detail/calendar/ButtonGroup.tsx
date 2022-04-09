import React, { useState } from "react";

const ButtonGroup = () => {
  const [selected, setSelected] = useState(1400);

  const onChangeRadio = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSelected(parseInt(e.target.value, 10));

  return (
    <section className="flex flex-row gap-3 my-6 font-semibold text-sm">
      <input
        type="radio"
        name="time"
        id="1400"
        value="1400"
        className="hidden"
        onChange={onChangeRadio}
      />
      <label
        htmlFor="1400"
        className={`cursor-pointer basis-1/2 border-2 rounded-lg text-center py-3 ${
          selected === 1400
            ? "text-navy border-navy"
            : "text-lightGray border-lightGray"
        }`}
      >
        1회 14:00
      </label>
      <input
        type="radio"
        name="time"
        id="1900"
        value="1900"
        className="hidden"
        onChange={onChangeRadio}
      />
      <label
        htmlFor="1900"
        className={`cursor-pointer basis-1/2 border-2 rounded-lg text-center py-3 ${
          selected === 1900
            ? "text-navy border-navy"
            : "text-lightGray border-lightGray"
        }`}
      >
        2회 19:00
      </label>
    </section>
  );
};

export default ButtonGroup;
