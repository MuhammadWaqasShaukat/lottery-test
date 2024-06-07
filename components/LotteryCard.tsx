"use client";

import { Lottery, LotteryCardType } from "@/types";
import {
  CHEVRON_DOWN,
  CHEVRON_UP,
  MAGNIFYING_MINUS,
  MAGNIFYING_PLUS,
} from "@/utils/iconsProvider";
import React, { useEffect, useState } from "react";
import NextDraw from "./nextDraw";

const LotteryCard = ({ accent, lotteryType }: LotteryCardType) => {
  const [lottery, setLottery] = useState<Lottery | null>(null);

  const getData = async () => {
    const res = await fetch(`/api/lottery?type=${lotteryType}`);
    const { data } = await res.json();
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    } else {
      setLottery(data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const [prevWinners, setPrevWinners] = useState<boolean>(false);
  const [currentPoolStatusExpanded, setCurrentPoolStatusExpanded] =
    useState<boolean>(false);

  return (
    <div className={`bg-${accent}-100 rounded-md w-full space-y-2`}>
      {prevWinners ? (
        <div className="col-span-2 px-4 py-2 space-y-2">
          <div className=" flex flex-row justify-between items-center">
            <div className=" flex flex-row justify-start items-center gap-2">
              <h2 className={`text-${accent} text-xl font-bold capitalize `}>
                {lottery?.type}
              </h2>
              <span className={`text-${accent}`}>Last 5 Winners</span>
            </div>
            <button
              className={` text-${accent}`}
              onClick={() => setPrevWinners(false)}
            >
              {MAGNIFYING_MINUS}
            </button>
          </div>

          <div className=" flex flex-col justify-start items-start">
            {lottery?.lastFiveWinners.map((winner: any, index: number) => {
              return (
                <div
                  className="flex flex-row justify-between items-center w-full"
                  key={index}
                >
                  <p className="font-bold text-sm text-black">
                    {winner.roundNumber}
                  </p>
                  <p className={`font-bold text-sm text-${accent}`}>
                    {winner.ticketNumber.replaceAll(",", " ")}
                  </p>
                  <p className="font-bold text-sm text-black">
                    {winner.winningAmount}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="col-span-2 px-4 py-2 space-y-2">
          <div className=" flex flex-row justify-between items-center">
            <div className=" flex flex-row justify-start items-center gap-2">
              <h2 className={`text-${accent} text-xl font-bold capitalize`}>
                {lottery?.type}
              </h2>
              <span className={`text-${accent}`}>
                No. {lottery?.lastLotteryRound}
              </span>
            </div>
            <button
              className={` text-${accent}`}
              onClick={() => setPrevWinners(true)}
            >
              {MAGNIFYING_PLUS}
            </button>
          </div>
          <div className=" flex flex-">
            {lottery?.lastWinner.ticketNumber
              .split(",")
              .map((segment: string, index: number, array) => {
                return (
                  <div
                    className={`h-12 w-12 border-2  grid place-content-center rounded-full ${
                      index === array.length - 1
                        ? `bg-${accent}`
                        : "bg-dark-gray"
                    }`}
                    key={index}
                  >
                    <span className={` font-semibold text-2xl text-white `}>
                      {segment}
                    </span>
                  </div>
                );
              })}
          </div>
          <div className=" flex flex-row justify-between items-center">
            <h2 className=" text-[13px] font-medium">Winning Pot</h2>
            <div>
              <span className=" text-black font-bold text-2xl">
                {lottery?.lastWinningPot}
              </span>
              <span className="ml-2 text-xs font-semibold">LUCKI</span>
            </div>
          </div>
        </div>
      )}
      <div className="w-full">
        <NextDraw accent={accent} />
      </div>

      {currentPoolStatusExpanded && (
        <div className=" flex flex-col pt-2 px-4">
          <h2 className=" text-base font-semibold ">Current Pool Status</h2>
          {lottery?.currentPoolStatus.tickets.map((ticket, index) => {
            return (
              <div className=" flex flex-row justify-between" key={index}>
                <h3>{ticket.coin}</h3>
                <p>{ticket.amount}</p>
              </div>
            );
          })}
          <div className=" border-t-2 flex flex-row justify-end items-center">
            ={" "}
            <span className=" text-black font-bold text-2xl">
              {lottery?.currentPoolStatus.poolAmount}
              <span className="ml-2 text-xs font-semibold">LUCKI</span>
            </span>
          </div>
        </div>
      )}

      <div className="px-4 py-1">
        <div className=" flex flex-row justify-center items-center">
          <button
            onClick={() =>
              setCurrentPoolStatusExpanded(!currentPoolStatusExpanded)
            }
          >
            {currentPoolStatusExpanded ? (
              <div className=" text-xs flex flex-row justify-center items-center gap-2 capitalize">
                {CHEVRON_UP}
                <span className="text-xs">Close</span>
              </div>
            ) : (
              <div className=" text-xs flex flex-row justify-center items-center gap-2">
                {CHEVRON_DOWN}
                <span className="text-xs">current pool status</span>
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LotteryCard;
