 import type { Seat } from "../types/seat";

type Props = {
  seat: Seat;
  onClick: (id: string) => void;
  showBooked: boolean;
  showSelected: boolean;
  showAvailable: boolean;
};


export const SeatItem = ({
  seat,
  onClick,
  showBooked,
  showSelected,
}: Props) => {
  let className = "seat available"; // ✅ base seat ALWAYS visible

  // Overlay states
  if (seat.status === "booked" && showBooked) {
    className = "seat booked";
  }

  if (seat.status === "selected" && showSelected) {
    className = "seat selected";
  }

  return (
    <div
      className={className}
      onClick={() =>
        seat.status !== "booked" && onClick(seat.id)
      }
    />
  );
};


