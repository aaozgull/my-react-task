
export type SeatStatus = "available" | "selected" | "booked";

export interface Seat {
  id: string;
  row: number;
  column: number;
  status: SeatStatus;
}
