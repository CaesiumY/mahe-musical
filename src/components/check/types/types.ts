export interface TicketsType {
  createdAt: Date;
  limitAt: Date;
  contact: string;
  email: string;
  musicalDate: string;
  name: string;
  seatCode: string;
  price: {
    local: number;
    normal: number;
    other: number;
  };
  seats: {
    normal: number;
    barrierFree: number;
    wheelChair: number;
  };
  status: BookStatus;
}

export type BookStatus =
  | "waiting"
  | "confirmed"
  | "cancelRequest"
  | "cancelled";
