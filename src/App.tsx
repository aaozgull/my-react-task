import { useState } from "react";
import { SeatGrid } from "./components/SeatGrid";
import { seatBlocks } from "./data/seatLayouts";
import type { Seat } from "./types/seat";
import "./index.css";

export default function App() {
  // seatBlocks already contains Seat[][]
  const [blocks, setBlocks] = useState<Seat[][]>(seatBlocks);

  const [showBooked, setShowBooked] = useState(true);
  const [showSelected, setShowSelected] = useState(true);
  const [showAvailable, setShowAvailable] = useState(true);


  const handleSeatClick = (id: string) => {
    setBlocks(prev =>
      prev.map(block =>
        block.map(seat =>
          seat.id === id && seat.status !== "booked"
            ? {
                ...seat,
                status:
                  seat.status === "selected"
                    ? "available"
                    : "selected",
              }
            : seat
        )
      )
    );
  };

  return (
    <div className="container">
      <h2>Select Your Seats</h2>

      {/* Legend */}
      <div className="legend">
        <label>
          <input
            type="checkbox"
            checked={showBooked}
            onChange={() => setShowBooked(v => !v)}
          />
          Booked
        </label>


        <label>
          <input
            type="checkbox"
            checked={showAvailable}
            onChange={() => setShowAvailable(v => !v)}
          />
          Available
        </label>


        <label>
          <input
            type="checkbox"
            checked={showSelected}
            onChange={() => setShowSelected(v => !v)}
          />
          Selected
        </label>
      </div>

      <SeatGrid
        blocks={blocks}
        onSeatClick={handleSeatClick}
        showBooked={showBooked}
        showAvailable={showAvailable}
        showSelected={showSelected}
      
      />

    </div>
  );
}
