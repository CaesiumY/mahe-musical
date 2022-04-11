export const TOTAL_SEAT_COUNT = 203;
export const NORMAL_SEAT_COUNT = 195;
export const WHEEL_CHARIR_SEAT_COUNT = 3;
export const BARRIER_FREE_SEAT_COUNT = 5;

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
};

export const timeTable = Object.keys(castingTable).reduce((acc, cur) => {
  const key = cur.slice(0, 2);
  const value = cur.slice(2);
  acc[key] ? acc[key].push(value) : (acc[key] = [value]);
  return acc;
}, {} as { [key: string]: string[] });
