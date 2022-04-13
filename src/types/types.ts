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

export interface TicketsType {
  createdAt: FirebaseDateType;
  limitedAt: FirebaseDateType;
  contact: string;
  email: string;
  musicalDate: string;
  name: string;
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
