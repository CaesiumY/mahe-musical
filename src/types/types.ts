import { Timestamp } from "firebase/firestore";

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
  createdAt: Timestamp;
  limitedAt: Timestamp;
  musicalDate: string;
  seatCode?: string[];
  price: PriceType;
  seats: SeatsType;
  status: BookStatus;
}

export interface TableDataType extends TicketsType {
  id: string;
}

export interface MusicalInfoType extends SeatsType {
  date: Timestamp;
  seats?: string[];
}
