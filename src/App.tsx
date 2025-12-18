import { useState } from "react";
import { SeatGrid } from "./components/SeatGrid";
import { seatBlocks } from "./data/seatLayouts";
import type { Seat } from "./types/seat";
import "./index.css";
import { SeatHeader } from "./components/SeatHeader";
import { SeatFooter } from "./components/SeatFooter";



export default function App() {
  const [blocks, setBlocks] = useState<Seat[][]>(seatBlocks);

  const [showBooked, setShowBooked] = useState(true);
  const [showAvailable, setShowAvailable] = useState(true);
  const [showSelected, setShowSelected] = useState(true);

  const [seatType, setSeatType] = useState<
  "vip" | "family" | "standard"
>("standard");

const [stand, setStand] = useState<
  "centenary" | "anfield" | "main" | "kop"
>("centenary");

const selectedSeats = blocks
  .flat()
  .filter(seat => seat.status === "selected")
  .map(seat => `L${seat.row}`);

const totalPrice = selectedSeats.length * 15;


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
    <div className="seat-layout">
      
      <SeatHeader
        showBooked={showBooked}
        showAvailable={showAvailable}
        showSelected={showSelected}
        onToggleBooked={() => setShowBooked(v => !v)}
        onToggleAvailable={() => setShowAvailable(v => !v)}
        onToggleSelected={() => setShowSelected(v => !v)}
        seatType={seatType}
        onSeatTypeChange={setSeatType}
      />


      <SeatGrid
        blocks={blocks}
        onSeatClick={handleSeatClick}
        showBooked={showBooked}
        showAvailable={showAvailable}
        showSelected={showSelected}
      />
            
        <SeatFooter
          stand={stand}
          onStandChange={setStand}
          seatCount={selectedSeats.length}
          onSeatCountChange={() => {}}
          selectedSeats={selectedSeats}
          totalPrice={totalPrice}
          onCancel={() => console.log("cancel")}
          onConfirm={() => console.log("confirm")}
        />

    </div>
  );
}

