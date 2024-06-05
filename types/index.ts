type Winner = {
  roundNumber: number;
  ticketNumber: string;
  winningAmount: number;
};

type Ticket = {
  coin: string;
  amount: number;
};

type Pool = {
  poolAmount: number;
  tickets: Ticket[];
};

export type Lottery = {
  type: string;
  lastLotteryRound: number;
  lastFiveWinners: Winner[];
  lastWinner: Winner;
  lastWinningPot: number;
  nextDrawTime: string;
  currentPoolStatus: Pool;
};

export type LotteryCardType = {
  accent: string;
  lotteryType: "classic" | "cosmic" | "atomic";
};
