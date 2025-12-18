
import type { Seat, SeatStatus } from "../types/seat";
//export type SeatStatus = "available" | "selected" | "booked";

type SeatStateConfig = {
  booked?: number[];
  selected?: number[];
};

const BLOCK_COUNT = 8;

const seatStateByBlock: SeatStateConfig[] = [
  { booked: [2, 5, 8], selected: [12] },
  { booked: [1, 6], selected: [2] },
  { booked: [4], selected: [9, 10] },
  { booked: [7,8], selected: [] },
  { booked: [3, 7], selected: [15] },
  { booked: [0], selected: [] },
  { booked: [], selected: [5] },
  { booked: [11], selected: [] },
];


const generateSeats = (
  rows: number,
  cols: number,
  stateConfig: SeatStateConfig = {},
  blockIndex = 0
): Seat[] => {
  const seats: Seat[] = [];
  let index = 0;

  for (let r = 1; r <= rows; r++) {
    for (let c = 1; c <= cols; c++) {
      let status: SeatStatus = "available";

      if (stateConfig.booked?.includes(index)) {
        status = "booked";
      } else if (stateConfig.selected?.includes(index)) {
        status = "selected";
      }

      seats.push({
        id: `b${blockIndex}-r${r}-c${c}`,
        row: r,
        column: c,
        status,
      });

      index++;
    }
  }

  return seats;
};


export const seatBlocks: Seat[][] = Array.from(
  { length: BLOCK_COUNT },
  (_, blockIndex) =>
    generateSeats(
      8,
      6,
      seatStateByBlock[blockIndex],
      blockIndex
    )
);




