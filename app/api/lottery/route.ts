import { Lottery } from "@/types";
import { NextResponse } from "next/server";

const cosmicLottery: Lottery = {
  type: "cosmic",
  lastLotteryRound: 101,
  lastFiveWinners: [
    { roundNumber: 96, ticketNumber: "12,34,09,53", winningAmount: 5000 },
    { roundNumber: 97, ticketNumber: "11,34,19,23", winningAmount: 7500 },
    { roundNumber: 98, ticketNumber: "45,14,59,55", winningAmount: 6000 },
    { roundNumber: 99, ticketNumber: "15,31,04,23", winningAmount: 9000 },
    { roundNumber: 100, ticketNumber: "14,31,01,15", winningAmount: 10000 },
  ],
  lastWinner: {
    roundNumber: 100,
    ticketNumber: "56,78,09,89,45",
    winningAmount: 10000,
  },
  lastWinningPot: 50000,
  nextDrawTime: "00:05:00",
  currentPoolStatus: {
    poolAmount: 12000,
    tickets: [
      { coin: "BTC", amount: 43434 },
      { coin: "ETH", amount: 32323 },
      { coin: "USDT", amount: 5000 },
    ],
  },
};

const classicLottery: Lottery = {
  type: "classic",
  lastLotteryRound: 202,
  lastFiveWinners: [
    { roundNumber: 197, ticketNumber: "15,31,0,23", winningAmount: 2000 },
    { roundNumber: 198, ticketNumber: "42,21,01,23", winningAmount: 2500 },
    { roundNumber: 199, ticketNumber: "1,37,99,50", winningAmount: 3000 },
    { roundNumber: 200, ticketNumber: "2,31,9,23", winningAmount: 3500 },
    { roundNumber: 201, ticketNumber: "16,14,59,09", winningAmount: 4000 },
  ],
  lastWinner: {
    roundNumber: 201,
    ticketNumber: "12,14,19,13",
    winningAmount: 4000,
  },
  lastWinningPot: 25000,
  nextDrawTime: "00:03:00",
  currentPoolStatus: {
    poolAmount: 8000,
    tickets: [
      { coin: "BTC", amount: 32323 },
      { coin: "ETH", amount: 53323 },
      { coin: "USDT", amount: 3000 },
    ],
  },
};

const atomicLottery: Lottery = {
  type: "atomic",
  lastLotteryRound: 303,
  lastFiveWinners: [
    { roundNumber: 298, ticketNumber: "12,30,01,33", winningAmount: 7000 },
    { roundNumber: 299, ticketNumber: "11,44,19,53", winningAmount: 8000 },
    { roundNumber: 300, ticketNumber: "12,14,09,09", winningAmount: 8500 },
    { roundNumber: 301, ticketNumber: "11,38,00,00", winningAmount: 9000 },
    { roundNumber: 302, ticketNumber: "53,14,49,83", winningAmount: 9500 },
  ],
  lastWinner: {
    roundNumber: 302,
    ticketNumber: "11,04,09,03",
    winningAmount: 9500,
  },
  lastWinningPot: 45000,
  nextDrawTime: "00:02:00",
  currentPoolStatus: {
    poolAmount: 10000,
    tickets: [
      { coin: "BTC", amount: 94394 },
      { coin: "ETH", amount: 83433 },
      { coin: "USDT", amount: 4000 },
    ],
  },
};

const responses: { [key: string]: Lottery } = {
  cosmic: cosmicLottery,
  classic: classicLottery,
  atomic: atomicLottery,
};

export async function GET(req: any) {
  const url = new URL(req.url);
  const type = url.searchParams.get("type") || "classic";
  let response = responses[type];
  return NextResponse.json({ data: response, success: false });
}
