// type Props = {
//   showBooked: boolean;
//   showAvailable: boolean;
//   showSelected: boolean;
//   onToggleBooked: () => void;
//   onToggleAvailable: () => void;
//   onToggleSelected: () => void;
// };

// export const SeatHeader = ({
//   showBooked,
//   showAvailable,
//   showSelected,
//   onToggleBooked,
//   onToggleAvailable,
//   onToggleSelected,
// }: Props) => {
//   return (
//     <div className="seat-header">
//       <div className="seat-header-top">
//         <div className="seat-title">
//           <h2>Select Your Seats</h2>
//           <p>Select your perfect seat to enjoy the match!</p>
//         </div>

//         <div className="seat-legend">
//           {/* Booked */}
//           <div className="legend-item" onClick={onToggleBooked}>
//             <span
//               className={`legend-box booked ${
//                 showBooked ? "active" : ""
//               }`}
//             />
//             <span>Booked</span>
//           </div>

//           {/* Available */}
//           <div className="legend-item" onClick={onToggleAvailable}>
//             <span
//               className={`legend-box available ${
//                 showAvailable ? "active" : ""
//               }`}
//             />
//             <span>Available</span>
//           </div>

//           {/* Selected */}
//           <div className="legend-item" onClick={onToggleSelected}>
//             <span
//               className={`legend-box selected ${
//                 showSelected ? "active" : ""
//               }`}
//             />
//             <span>Selected</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

type Props = {
  showBooked: boolean;
  showAvailable: boolean;
  showSelected: boolean;
  onToggleBooked: () => void;
  onToggleAvailable: () => void;
  onToggleSelected: () => void;

  seatType: "vip" | "family" | "standard";
  onSeatTypeChange: (type: "vip" | "family" | "standard") => void;
};

export const SeatHeader = ({
  showBooked,
  showAvailable,
  showSelected,
  onToggleBooked,
  onToggleAvailable,
  onToggleSelected,
  seatType,
  onSeatTypeChange,
}: Props) => {
  return (
    <div className="seat-header">
      {/* TOP ROW */}
      <div className="seat-header-top">
        <div className="seat-title">
          <h2>Select Your Seats</h2>
          <p>Select your perfect seat to enjoy the match!</p>
        </div>

        <div className="seat-legend">
          <div className="legend-item" onClick={onToggleBooked}>
            <span
              className={`legend-box booked ${showBooked ? "active" : ""}`}
            />
            <span>Booked</span>
          </div>

          <div className="legend-item" onClick={onToggleAvailable}>
            <span
              className={`legend-box available ${
                showAvailable ? "active" : ""
              }`}
            />
            <span>Available</span>
          </div>

          <div className="legend-item" onClick={onToggleSelected}>
            <span
              className={`legend-box selected ${
                showSelected ? "active" : ""
              }`}
            />
            <span>Selected</span>
          </div>
        </div>
      </div>

      {/* MIDDLE SEAT TYPE SELECTOR */}
      <div className="seat-type-selector">
        <label className={seatType === "vip" ? "active" : ""}>
          <input
            type="radio"
            name="seatType"
            checked={seatType === "vip"}
            onChange={() => onSeatTypeChange("vip")}
          />
          VIP Seating
        </label>

        <label className={seatType === "family" ? "active" : ""}>
          <input
            type="radio"
            name="seatType"
            checked={seatType === "family"}
            onChange={() => onSeatTypeChange("family")}
          />
          Family Zone
        </label>

        <label className={seatType === "standard" ? "active" : ""}>
          <input
            type="radio"
            name="seatType"
            checked={seatType === "standard"}
            onChange={() => onSeatTypeChange("standard")}
          />
          Standard Seating
        </label>
      </div>
    </div>
  );
};

