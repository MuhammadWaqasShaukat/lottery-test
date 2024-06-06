"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import Countdown from "react-countdown";

const NextDraw = ({ accent }: { accent: string }) => {
  const { data: session } = useSession();

  const router = useRouter();

  const handlePlayBtnClk = () => {
    if (!session) {
      router.push("/api/auth/signin");
    } else {
      alert("You have won the lottery");
    }
  };

  return (
    <div className={`${accent === "blue" ? "bg-blue" : `bg-${accent}`}`}>
      <div className={`flex flex-row justify-between text-white p-2`}>
        <div className=" flex flex-row justify-between items-center gap-2">
          <h1>Next Draw</h1>
          <Countdown
            className="text-lg self-start"
            date={Date.now() + 50000000}
          ></Countdown>
        </div>
        <button
          className=" bg-white px-4 py-1 rounded-md font-semibold text-black"
          onClick={handlePlayBtnClk}
        >
          Play
        </button>
      </div>
    </div>
  );
};

export default NextDraw;
