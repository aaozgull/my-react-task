import "./SeatFooter.css";

type StandType = "centenary" | "anfield" | "main" | "kop";

type Props = {
  stand: StandType;
  onStandChange: (stand: StandType) => void;

  seatCount: number;
  onSeatCountChange: (count: number) => void;

  selectedSeats: string[];
  totalPrice: number;

  onCancel: () => void;
  onConfirm: () => void;
};

export const SeatFooter = ({
  stand,
  onStandChange,
  seatCount,
  onSeatCountChange,
  selectedSeats,
  totalPrice,
  onCancel,
  onConfirm,
}: Props) => {
  return (
    <div className="seat-footer">
      {/* TOP ROW */}
      <div className="seat-footer-top">
        <div className="stand-selector">
          <button
            className={stand === "centenary" ? "active" : ""}
            onClick={() => onStandChange("centenary")}
          >
            ● Centenary Stand
          </button>

          <button
            className={stand === "anfield" ? "active" : ""}
            onClick={() => onStandChange("anfield")}
          >
            ● Anfield Road Stand
          </button>

          <button
            className={stand === "main" ? "active" : ""}
            onClick={() => onStandChange("main")}
          >
            ● Main Stand
          </button>

          <button
            className={stand === "kop" ? "active" : ""}
            onClick={() => onStandChange("kop")}
          >
            ● KOP Stand
          </button>
        </div>
      </div>

      {/* MIDDLE ROW */}
      <div className="seat-footer-middle">
        <div className="seat-info">
          <span>No of Seats</span>
          <select
            value={seatCount}
            onChange={e => onSeatCountChange(Number(e.target.value))}
          >
            {[1, 2, 3, 4, 5, 6].map(n => (
              <option key={n} value={n}>
                {n < 10 ? `0${n}` : n}
              </option>
            ))}
          </select>
        </div>

        <div className="seat-selected">
          <span>Seat:</span>
          <strong>
            {selectedSeats.length
              ? selectedSeats.join(", ")
              : "-"}
          </strong>
        </div>

        <div className="seat-price">
          <strong>{totalPrice}$</strong>
        </div>
      </div>

      {/* BOTTOM ROW */}
      <div className="seat-footer-actions">
        <button className="btn-cancel" onClick={onCancel}>
          Cancel
        </button>
        <button className="btn-confirm" onClick={onConfirm}>
          Confirm
        </button>
      </div>
    </div>
  );
};
