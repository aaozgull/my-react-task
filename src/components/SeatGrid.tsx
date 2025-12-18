
import type { Seat } from "../types/seat";
import { SeatBlock } from "./SeatBlock";

type Props = {
  blocks: Seat[][];
  onSeatClick: (id: string) => void;
  showBooked: boolean;
  showSelected: boolean;
  showAvailable:boolean;
};

export const SeatGrid = ({
  blocks,
  onSeatClick,
  showBooked,
  showSelected,
  showAvailable
}: Props) => {
    console.log("blocks", blocks);

  return (
    <div className="hall-grid">
      {blocks.map((blockSeats, index) => (
        <SeatBlock
          key={index}
          blockIndex={index}       
          seats={blockSeats}
          onSeatClick={onSeatClick}
          showBooked={showBooked}
          showSelected={showSelected}
          showAvailable ={showAvailable}
        />
      ))}
    </div>
  );
};


