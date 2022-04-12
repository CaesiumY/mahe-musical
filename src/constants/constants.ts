export const TOTAL_SEAT_COUNT = 203;
export const NORMAL_SEAT_COUNT = 195;
export const WHEEL_CHARIR_SEAT_COUNT = 3;
export const BARRIER_FREE_SEAT_COUNT = 5;

export const NOMAL_SEAT_PRICE = 8000;
export const DISCOUNTED_SEAT_PRICE = 6000;

export const ACCOUNT_NUMBER = "0123456789";

export const MAX_TICKETS_PER_PERSON = 9;

export const castingTable = {
  "121930": "표영후 이예빈 김예준",
  "131930": "최현우 이예진 김예준",
  "141400": "표형우 이예빈 김예준",
  "141900": "최현우 이예진 김예준",
  "151400": "최현우 이예진 김예준",
  "151900": "표형우 이예빈 김예준",
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
