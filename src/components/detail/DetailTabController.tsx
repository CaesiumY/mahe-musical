import React, { useState } from "react";
import MusicalGuide from "./tabContents/MusicalGuide";
import MusicalInfo from "./tabContents/MusicalInfo";
import CastingPlan from "./tabContents/CastingPlan";

const tabs = {
  관람안내: <MusicalGuide />,
  공연소개: <MusicalInfo />,
  "캐스팅 일정": <CastingPlan />,
};

type TabsType = keyof typeof tabs;

const DetailTabController = () => {
  const [selected, setSelected] = useState<TabsType>("관람안내");

  const onClickButton = (key: TabsType) => setSelected(key);

  return (
    <section className="m-[30px] sm:m-24">
      <div className="flex flex-row gap-9 text-sm sm:text-xl">
        {(Object.keys(tabs) as TabsType[]).map((key) => (
          <button
            key={key}
            className={`font-semibold pb-2 border-black ${
              selected === key && "border-b-4"
            }`}
            onClick={() => onClickButton(key)}
          >
            {key}
          </button>
        ))}
      </div>

      <article className="my-11 max-w-3xl">{tabs[selected]}</article>
    </section>
  );
};

export default DetailTabController;
