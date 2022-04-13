export type FirebaseDateType = {
  seconds: number;
  nanoseconds: number;
};

export interface PriceType {
  local: number;
  normal: number;
  other: number;
}
export interface SeatsType {
  normal: number;
  wheelChair: number;
  barrierFree: number;
}

export type BookStatus =
  | "waiting"
  | "confirmed"
  | "cancelRequest"
  | "cancelled";

export interface UserInfoType {
  name: string;
  contact: string;
  email: string;
}
export interface TicketsType extends UserInfoType {
  createdAt: FirebaseDateType;
  limitedAt: FirebaseDateType;
  musicalDate: string;
  seatCode?: string[];
  price: PriceType;
  seats: SeatsType;
  status: BookStatus;
}

// export interface MusicalSeatCount {
//   normal: number;
//   wheelChair: number;
//   barrierFree: number;
// }

export interface MusicalInfoType {
  customers: SeatsType;
  date: FirebaseDateType;
  seats?: string[];
}
