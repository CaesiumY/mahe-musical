export const TOTAL_SEAT_COUNT = 203;
export const NORMAL_SEAT_COUNT = 195;
export const WHEEL_CHARIR_SEAT_COUNT = 3;
export const BARRIER_FREE_SEAT_COUNT = 5;

export const NOMAL_SEAT_PRICE = 10000;
export const DISCOUNTED_SEAT_PRICE = 5000;

export const ACCOUNT_NUMBER = "0123456789";

export const MAX_TICKETS_PER_PERSON = 9;
export const LIMIT_TICKET_DATE = 2;

export const castingTable = {
  "111930": "표영후, 이예빈, 김예준",
  "121930": "최현우, 이예진, 김예준",
  "131430": "표영후, 이예빈, 김예준",
  "131930": "최현우, 이예진, 김예준",
  "141430": "최현우, 이예진, 김예준",
  "141930": "표영후, 이예빈, 김예준",
};

export const collectionNames = {
  MUSICAL_INFO: "musicalInfo",
  TICKETS: "tickets",
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
