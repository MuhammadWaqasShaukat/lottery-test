import React from "react";
import Countdown from "react-countdown";

const NextDraw = ({ accent }: { accent: string }) => {
  return (
    <div
      className={`bg-${accent} flex flex-row justify-between -px-6  text-white p-2 rounded-md`}
    >
      <div className=" flex flex-row justify-between items-center gap-2">
        <h1>Next Draw</h1>
        <Countdown
          className="text-lg self-start"
          date={Date.now() + 50000000}
        ></Countdown>
      </div>
      <button className=" bg-white px-4 py-1 rounded-md font-semibold text-black">
        Play
      </button>
    </div>
  );
};

export default NextDraw;
