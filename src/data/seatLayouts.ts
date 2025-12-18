
import type { Seat, SeatStatus } from "../types/seat";
//export type SeatStatus = "available" | "selected" | "booked";

type SeatStateConfig = {
  booked?: number[];
  selected?: number[];
};

const BLOCK_COUNT = 8;

const seatStateByBlock: SeatStateConfig[] = [
  { booked: [4,5,19,20,21,22,23], selected: [] },
  { booked: [30,32,34,42,43,44,45,46,47,48], selected: [] },
  { booked: [30,31,32,33,34,35], selected: [] },
  { booked: [1,42,43,44,45,46,47,48], selected: [] },
  { booked: [], selected: [] },
  { booked: [], selected: [6,7,8,9,10,11] },
  { booked: [19, 21, 23, 30,31,32,33,34], selected: [] },
  { booked: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,28,29,30,31,32,33,34,36,37,38,39,40,41,42,43,44,45,45,46,47], selected: [] },
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




