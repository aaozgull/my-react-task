import type { Seat } from "../types/seat";
import { SeatItem } from "./Seat";



type Props = {
  blockIndex: number;
  seats: Seat[];
  onSeatClick: (id: string) => void;
  showBooked: boolean;
  showSelected: boolean;
  showAvailable: boolean;
};


const shouldRenderSpace = (
  row: number,
  col: number,
  isLeftBlock: boolean,
  isRightBlock: boolean
): boolean => {
  if (row === 1) return isLeftBlock ? col <= 4 : isRightBlock ? col >= 3 : false;
  if (row === 2) return isLeftBlock ? col <= 3 : isRightBlock ? col >= 4 : false;
  if (row === 3) return isLeftBlock ? col <= 2 : isRightBlock ? col >= 5 : false;
  if (row === 4) return isLeftBlock ? col <= 1 : isRightBlock ? col >= 6 : false;
  return false;
};

export const SeatBlock = ({
  blockIndex,
  seats,
  onSeatClick,
  showBooked,
  showAvailable,
  showSelected,
}: Props) => {
  const isLeftBlock = seats[0].id.includes("b0") || seats[0].id.includes("b4");
  const isRightBlock = seats[0].id.includes("b3") || seats[0].id.includes("b7");

  return (
    <div className="seat-block">
      {seats.map(seat => {
        if(blockIndex === 0 || blockIndex === 3){
          if (
            shouldRenderSpace(
              seat.row,
              seat.column,
              isLeftBlock,
              isRightBlock
            )
          ) {
            return <div key={seat.id} className="seat space" />;
          }
      }

        return (
          <SeatItem
            key={seat.id}
            seat={seat}
            onClick={onSeatClick}
            showBooked={showBooked}
            showAvailable={showAvailable}
            showSelected={showSelected}
          />
        );
      })}
    </div>
  );
};



