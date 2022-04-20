import Image from "next/image";
import React from "react";
import seatTable from "@/images/seat_table.svg";
import discountTable from "@/images/discount_table.svg";
import { NOMAL_SEAT_PRICE } from "@/constants/constants";

const Title = ({ children }: { children: string }) => (
  <h2 className="mb-4 font-semibold text-xl">&lt;{children}&gt;</h2>
);

interface GuideBox {
  title: string;
  children: React.ReactNode;
}

const GuideBox = ({ title, children }: GuideBox) => {
  return (
    <article className="my-14">
      <Title>{title}</Title>
      <div className="text-dark leading-6">{children}</div>
    </article>
  );
};

const MusicalGuide = () => {
  return (
    <div>
      <p>
        * 예매자는 본 안내페이지의 모든 내용을 숙지 및 동의한 것으로 간주합니다.
        관람 연령/ 티켓 수령(증빙할인 포함)/ 공연 관람 안내 미숙지로 인한 책임은
        관람자 본인에게 있으며, 예매 티켓의 취소/변경/환불은 불가하오니 각별히
        유의하시기 바랍니다.
      </p>

      <GuideBox title="티켓 예매 안내">
        <ul>
          <li>
            예매 페이지에서 폼을 작성한 후{" "}
            <strong>입금을 완료하셔야 예매가 확정</strong>됩니다.
          </li>
          <li>
            <p className="mb-[7px]">
              입금 순서대로 예매가 확정되며,{" "}
              <strong>입금 후 1일 이내에 예매 확정 메일</strong>을 보내드릴
              예정입니다.
            </p>
            <ul>
              <li>
                입금 기한은 <strong>예매 다음날 23시 59분까지</strong>입니다.
                입금 기한이 지난 예매 내역은 자동으로 취소됩니다.
              </li>
              <li>예매 확정 메일이 왔는지 확인해주세요.</li>
              <li>
                예매 페이지 폼에 <strong>이메일 주소</strong>를 정확하게
                기재해주세요.
              </li>
              <li>
                <strong>예매자명과 입금자명이 동일</strong>해야 합니다.
              </li>
              <li>
                입금 후 1일이 지나도 예매 확정 연락이 오지 않는다면, 반드시
                문의해주세요. <br /> (
                <a
                  className="hover:underline text-navy"
                  href="mailto:wearemahe@gmail.com"
                >
                  wearemahe@gmail.com
                </a>
                {" / "}
                <a
                  className="hover:underline text-navy"
                  href="https://www.instagram.com/mahe_musical/"
                >
                  인스타그램 : mahe_musical
                </a>
                {" / "}
                카카오톡 채널 : @mahe_musical)
              </li>
            </ul>
          </li>
          <li>
            <p className="mb-[7px]">
              예매 취소 시 기간에 따라 취소 수수료가 부과되며, 취소 마감시간
              이후 취소, 환불, 변경이 불가합니다.
            </p>
            <ul>
              <li>공연일 기준 8일 전까지 100% 환불</li>
              <li>공연일 기준 4일 전까지 50% 환불</li>
              <li>이후 예매 취소 및 변경 불가</li>
              <li>
                예매 취소, 환불, 변경 관련해서는 카카오톡 채널 &lsquo;연세대학교
                뮤지컬 소모임 마헤&rsquo;로 문의해주시기 바랍니다.
                <a
                  className="hover:underline text-navy"
                  href="http://pf.kakao.com/_xmxmxcDb"
                >
                  (http://pf.kakao.com/_xmxmxcDb)
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </GuideBox>
      <GuideBox title="좌석 배정 및 티켓 수령 안내">
        <ul>
          <li>
            <strong>공연 시간 1시간 전부터 티켓 수령이 가능합니다.</strong>
          </li>
          <li>
            <strong>좌석은 예매 확정 순으로 앞자리부터 배정</strong>되며 공연
            당일 해당 티켓을 수령하실 수 있습니다.
          </li>
          <li>
            티켓 수령 시 <strong>예매자분 성함과 전화번호 뒷자리를 확인</strong>
            합니다. 예매페이지 폼에 전화번호를 정확하게 기재해주세요.
          </li>
          <li>
            <strong>
              증빙이 필요한 할인은 티켓 수령 시 증빙자료를 반드시 지참
            </strong>
            하셔야 합니다. 미지참 시 차액을 지불하셔야 합니다.
          </li>
          <li>
            공연 당일 할인 권종 변경 및 변심으로 인한 예매 취소, 환불은
            불가합니다.
          </li>
        </ul>
      </GuideBox>
      <GuideBox title="배리어프리 공연 안내">
        <ul>
          <li>본 공연에서는 휠체어석과 배리어프리 자막 서비스가 운영됩니다.</li>
          <li>
            입금 순서대로 예매가 확정되며, 선착순으로 조기 마감될 수 있습니다.
          </li>
          <li>휠체어석 (1열 중앙 3석)</li>
          <li>
            <p className="mb-[7px]">배리어프리 자막 (맨 뒷열 중앙 5석)</p>
            <ul>
              <li>
                스마트폰 화면을 통해 대사, 음악 설명, 소리 설명을 실시간
                자막으로 송출합니다.
              </li>
              <li>
                <strong>
                  5/11(수), 5/12(목) 공연에서는 배리어프리 자막 서비스를
                  운영하지 않습니다.
                </strong>
              </li>
            </ul>
          </li>
        </ul>
      </GuideBox>
      <GuideBox title="관람 등급 안내">
        <ul>
          <li>
            본 공연은{" "}
            <strong>
              14세 이상 관람가 (관람일 기준 2009년도 포함 이전 출생자)
            </strong>
            입니다.
          </li>
          <li>
            14세 미만의 경우 티켓 소지 여부, 보호자 동반 여부와 관계없이 객석
            입장이 불가합니다.
          </li>
          <li>
            연령 확인이 필요한 경우 현장에서 학생증, 건강보험증, 여권 등
            관람자의 생년월일을 확인할 수 있는 서류를 반드시 증빙해 주셔야
            합니다.
          </li>
          <li>
            관람 연령 미숙지로 인한 공연 당일 환불 및 취소, 변경은 불가하니 예매
            시 유의하시기 바랍니다.
          </li>
        </ul>
      </GuideBox>
      <GuideBox title="공연 관람 안내">
        <ul>
          <li>공연 러닝타임 : 110분 (인터미션 없음)</li>
          <li>
            원활한 공연 진행을 위해 공연 시작 후에는 입장이 제한됩니다. 공연이
            시작된 후에는 공연의 흐름에 따라 입장이 지연되거나 제한될 수 있으며,
            이 경우 예매하신 본인 좌석이 아닌 지연석에 착석하여야 합니다.
          </li>
          <li>공연 중간 퇴장할 경우 재입장 불가합니다.</li>
          <li>
            공연 중 사전에 협의되지 않은 사진 및 동영상 촬영, 녹음이 엄격히
            금지되어 있습니다.(단, 공연 이후 커튼콜은 촬영 가능합니다.)
          </li>
          <li>
            객석 내 물을 포함한 모든 음식물 및 꽃다발 등 공연 관람에 방해가 되는
            물품의 반입이 불가합니다. <br />
            *공연 당일 로비에서 꽃다발 보관 서비스를 제공합니다.
          </li>
        </ul>
      </GuideBox>
      <GuideBox title="교통 및 주차 안내">
        <ul>
          <li>
            극장 및 인근은 주차 공간이 매우 협소하므로, 가급적 대중교통을 이용해
            주시기 바랍니다. 주차 문제와 교통난으로 인해 당일 관람이 불가하거나
            관람을 포기한 경우 예매 취소 및 환불, 변경은 불가합니다.
          </li>
        </ul>
      </GuideBox>
      <GuideBox title="코로나 19 관련 안내">
        <ul>
          <li>
            <p className="mb-[7px]">방역패스 운영 X</p>
            <ul>
              <li>
                22년 3월 1일부터 방역패스 운영이 잠정 중단됨에 따라 관객 대상
                방역패스 운영도 시행하지 않습니다. 다만, 이후 관람일 기준 정부의
                운영 지침에 따라 방역패스 재개 또는 조정될 수 있는 점 참고
                부탁드립니다.
              </li>
            </ul>
          </li>
          <li>
            <p className="mb-[7px]">좌석 운영</p>
            <ul>
              <li>
                본 공연은 코로나19 관련 정부의 사회적 거리두기 단계에 따라, 객석
                운영을 진행하고 있습니다. 객석 운영은 현장 상황과 방역 지침
                공지에 따라 예고 없이 유동적으로 변경될 수 있습니다.
              </li>
            </ul>
          </li>
          <li>
            <p className="mb-[7px]">전 관객 마스크 착용 및 발열 체크 의무화</p>
            <ul>
              <li>
                마스크 미착용 및 체온 미측정이나 측정 거부 시 입장이 제한될 수
                있으니 체온 측정에 협조 부탁드립니다.
              </li>
              <li>37.5도 이상일 경우 객석 입장이 제한될 수 있습니다.</li>
            </ul>
          </li>
          <li>
            <p className="mb-[7px]">공연장 내 방역 수칙</p>
            <ul>
              <li>객석 내 물을 포함한 모든 음식물 섭취가 제한됩니다.</li>
              <li>
                극장 내에서는 올바른 마스크 착용과 함께 서로 간의 안전거리를
                유지 부탁드리며, 불필요한 대화 및 함성은 자제 부탁드립니다.
              </li>
              <li>
                위 사항 미준수 시 퇴장 조치 될 수 있으니 참고 부탁드립니다.
              </li>
            </ul>
          </li>
        </ul>
      </GuideBox>
      <GuideBox title="좌석 배치도">
        <Image src={seatTable} alt="좌석 배치도" />
      </GuideBox>
      <GuideBox title="할인 정보">
        <p className="mb-4">정가: 전석 {NOMAL_SEAT_PRICE.toLocaleString()}원</p>
        <Image src={discountTable} alt="할인 정보" />
      </GuideBox>
    </div>
  );
};

export default MusicalGuide;
