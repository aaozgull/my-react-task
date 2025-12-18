import { SeatClass } from "../enums/SeatClass";

interface Props {
  selected: SeatClass;
  onChange: (value: SeatClass) => void;
}

export const LayoutSelector = ({ selected, onChange }: Props) => {
  return (
    <select
      value={selected}
      onChange={(e) => onChange(e.target.value as SeatClass)}
    >
      {Object.values(SeatClass).map((seatClass) => (
        <option key={seatClass} value={seatClass}>
          {seatClass}
        </option>
      ))}
    </select>
  );
};
