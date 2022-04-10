export type FirebaseDateType = {
  seconds: number;
  nanoseconds: number;
};

export interface MusicalInfoType {
  customers: number;
  date: FirebaseDateType;
  seats?: string[];
}
