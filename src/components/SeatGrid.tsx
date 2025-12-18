
import type { Seat } from "../types/seat";
import { SeatBlock } from "./SeatBlock";

type Props = {
  blocks: Seat[][];
  onSeatClick: (id: string) => void;
  showBooked: boolean;
  showAvailable:boolean;
  showSelected: boolean;
};


export const SeatGrid = ({
  blocks,
  onSeatClick,
  showBooked,
  showAvailable,
  showSelected,
}: Props) => {
    //console.log("blocks", blocks);
     blocks.forEach((block, bi) => {
    block.forEach(seat => {
      if (seat.status === "selected") {
        console.log("✅ SELECTED SEAT FOUND:", bi, seat);
      }
    });
  });


  return (
    <div className="hall-grid">
      {blocks.map((blockSeats, index) => (
        <SeatBlock
          key={index}
          blockIndex={index}       
          seats={blockSeats}
          onSeatClick={onSeatClick}
          showBooked={showBooked}
          showAvailable ={showAvailable}
          showSelected={showSelected}          
        />
      ))}
    </div>
  );
};


