export const TOTAL_SEAT_COUNT = 203;
export const NORMAL_SEAT_COUNT = 195;
export const WHEEL_CHARIR_SEAT_COUNT = 3;
export const BARRIER_FREE_SEAT_COUNT = 5;
export const NO_BARRIER_FREE_TOTAL_SEAT_COUNT =
  NORMAL_SEAT_COUNT + BARRIER_FREE_SEAT_COUNT;

export const NOMAL_SEAT_PRICE = 10000;
export const MATINEE_SEAT_PRICE = 8000;
export const DISCOUNTED_SEAT_PRICE = 5000;

export const ACCOUNT_NUMBER = "3333182842778 카카오뱅크 이예진";

export const MAX_TICKETS_PER_PERSON = 9;
export const LIMIT_TICKET_DATE = 2;

export const castingTable = {
  "111930": "최현우, 이예진, 김예준",
  "121930": "표영후, 이예빈, 김예준",
  "131430": "최현우, 이예진, 김예준",
  "131930": "표영후, 이예빈, 김예준",
  "141430": "표영후, 이예빈, 김예준",
  "141930": "최현우, 이예진, 김예준",
};

export const collectionNames = {
  TICKETS: "tickets",
  EMAIL: "mail",
};

export const timeTable = Object.keys(castingTable).reduce((acc, cur) => {
  const key = cur.slice(0, 2);
  const value = cur.slice(2);
  acc[key] ? acc[key].push(value) : (acc[key] = [value]);
  return acc;
}, {} as { [key: string]: string[] });

export const contactRegex = /^(\d{2,3})(\d{3,4})(\d{4})$/;
export const makeContactRegex = (str: string) =>
  str.replace(contactRegex, `$1-$2-$3`);

export const requestEmailTitle =
  '[마헤_입금요청] "어쩌면 해피엔딩 by ma:he" 예매 완료를 위해 입금 부탁드립니다';

export const requestEmailString = ({
  username,
  limitDate,
  totalPrice,
}: {
  username: string;
  limitDate: string;
  totalPrice: string;
}) => `
<img
src="https://raw.githubusercontent.com/CaesiumY/mahe-musical/main/src/constants/email/images/image1.png"
alt="어쩌면 해피엔딩"
/>
<div style="border: 1px solid gray; padding: 0.5rem">
<p>
  안녕하세요 ${username}님, "어쩌면 해피엔딩 by ma:he" 공연을 예매해주셔서
  감사합니다 :)
</p>
<p>예매 확정을 위해 입금 부탁 드립니다.</p>

<p>
  ▷ 예매자명: ${username} <br />
  (입금 시 <strong>'입금자명'을 '예매자명'과 동일하게</strong> 해주세요.)
</p>
<p>
  ▷ 입금 기한: <span style="color: red"><i>${limitDate}</i></span> <br />
  (입금 기한이 지난 예매 내역은 자동으로 취소됩니다.)
</p>
<p>▷ 계좌번호: 3333182842778 카카오뱅크</p>
<p>▷ 예금주: 이예진</p>

<p>▷ 입금액: ${totalPrice}원</p>
<p>
  <a href="https://www.mahemusical.com/bookCheck"
    >* 나의 예매내역 확인하기</a
  >
</p>
</div>`;
