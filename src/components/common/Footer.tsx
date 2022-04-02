import React from "react";
import IconGroup from "./IconGroup";

const Footer = () => {
  return (
    <footer className="text-gray-600 bg-white">
      <div className="px-5 py-5 sm:p-16 flex flex-col gap-4">
        <div className="basis-2/3 text-center text-sm">
          <p>
            연세대학교 뮤지컬 소모임 ma:he 봄 공연 뮤지컬 &lt;어쩌면
            해피엔딩&gt;
          </p>
          <p>2022.05.12 - 2022.05.15 북아현아트홀</p>
          <p>
            * 본 공연은 아마추어 프로덕션 공연으로, 원작사인 CJ ENM MUSICAL에
            정식으로 허가받은 공연입니다.
          </p>
        </div>

        <IconGroup />
      </div>
    </footer>
  );
};

export default Footer;
