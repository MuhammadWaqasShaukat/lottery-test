"use client";
import LotteryCard from "@/components/LotteryCard";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  return <LotteryCard accent="green" lotteryType={"atomic"} />;
}

//
/*


      
        <div className="bg-purple-100 rounded-md w-full p-4 space-y-4">
          <div className=" flex flex-row justify-between items-center">
            <div className=" flex flex-row justify-start items-center gap-2">
              <h2 className="text-purple text-xl font-bold">Cosmic</h2>
              <span className="text-purple">No. 2302131</span>
            </div>
            <button className=" text-purple">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6"
                />
              </svg>
            </button>
          </div>
          <div className=" flex flex-">
            {lotteryNoWinners
              .split(",")
              .map((segment: string, index: number, array) => {
                return (
                  <div
                    className={`h-12 w-12 border-2  grid place-content-center rounded-full ${
                      index === array.length - 1 ? "bg-purple" : "bg-dark-gray"
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
                980,934,368,172
              </span>
              <span className="ml-2 text-xs font-semibold">LUCKI</span>
            </div>
          </div>
          <div>Next Draw</div>
          <div className=" flex flex-row justify-center items-center">
            <button>
              {currentPoolStatus ? (
                <div className=" text-xs flex flex-row justify-center items-center gap-2 capitalize">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>{" "}
                  current pool status
                </div>
              ) : (
                <div className=" text-sm flex flex-row justify-center items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 15.75 7.5-7.5 7.5 7.5"
                    />
                  </svg>{" "}
                  <span> Close</span>
                </div>
              )}
            </button>
          </div>
        </div>


        <div className="bg-blue-100 rounded-md w-full p-4 space-y-4">
          <div className=" flex flex-row justify-between items-center">
            <div className=" flex flex-row justify-start items-center gap-2">
              <h2 className="text-blue text-xl font-bold">Classic</h2>
              <span className="text-blue">Past 5 Results</span>
            </div>
            <button className=" text-blue">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6"
                />
              </svg>
            </button>
          </div>
          <div className=" flex flex-col justify-start items-start">
            {pastWinners.map((winner: any, index: number) => {
              return (
                <div
                  className="flex flex-row justify-between items-center w-full"
                  key={index}
                >
                  <p className="font-bold text-sm text-black">{winner.round}</p>
                  <p className="font-bold text-sm text-blue">
                    {winner.ticket.replaceAll(",", " ")}
                  </p>
                  <p className="font-bold text-sm text-black">{winner.prize}</p>
                </div>
              );
            })}
          </div>

          <div>Next Draw</div>
          <div className=" flex flex-row justify-center items-center">
            <button>
              {currentPoolStatus ? (
                <div className=" text-xs flex flex-row justify-center items-center gap-2 capitalize">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>{" "}
                  current pool status
                </div>
              ) : (
                <div className=" text-sm flex flex-row justify-center items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 15.75 7.5-7.5 7.5 7.5"
                    />
                  </svg>{" "}
                  <span> Close</span>
                </div>
              )}
            </button>
          </div>
        </div>



        <div className="bg-green-100 rounded-md w-full p-4 space-y-4">
          <div className=" flex flex-row justify-between items-center">
            <div className=" flex flex-row justify-start items-center gap-2">
              <h2 className="text-green text-xl font-bold">Atomic</h2>
              <span className="text-green">No. 2302131</span>
            </div>
            <button className=" text-green">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6"
                />
              </svg>
            </button>
          </div>
          <div className=" flex flex-">
            {lotteryNumbertwo
              .split(",")
              .map((segment: string, index: number, array) => {
                return (
                  <div
                    className="h-12 w-12 border-2  grid place-content-center rounded-full bg-green"
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
                980,934,368,172
              </span>
              <span className="ml-2 text-xs font-semibold">LUCKI</span>
            </div>
          </div>
          <div>Next Draw</div>
          <div className=" flex flex-row justify-center items-center">
            <button>
              {currentPoolStatus ? (
                <div className=" text-xs flex flex-row justify-center items-center gap-2 capitalize">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>{" "}
                  current pool status
                </div>
              ) : (
                <div className=" text-sm flex flex-row justify-center items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 15.75 7.5-7.5 7.5 7.5"
                    />
                  </svg>{" "}
                  <span> Close</span>
                </div>
              )}
            </button>
          </div>
        </div>


*/
