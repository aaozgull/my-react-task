

export const SeatClass = {
  ECONOMY : "ECONOMY",
  PREMIUM : "PREMIUM",
  GOLD : "GOLD",
}

export type SeatClass = typeof SeatClass[keyof typeof SeatClass];


