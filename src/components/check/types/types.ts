import { FirebaseDateType } from "@/components/detail/types/types";

export interface PriceType {
  local?: number;
  normal?: number;
  other?: number;
}
export interface SeatsType {
  normal?: number;
  wheelChair?: number;
  barrierFree?: number;
}
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

export type BookStatus =
  | "waiting"
  | "confirmed"
  | "cancelRequest"
  | "cancelled";
