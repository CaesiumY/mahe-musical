export type FirebaseDateType = {
  seconds: number;
  nanoseconds: number;
};

export interface MusicalSeatCount {
  normal: number;
  wheelChair: number;
  barrierFree: number;
}

export interface MusicalInfoType {
  customers: MusicalSeatCount;
  date: FirebaseDateType;
  seats?: string[];
}
