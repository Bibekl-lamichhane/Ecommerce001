"use client";
import React, { useEffect, useState } from "react";

const Lottery = () => {
  const [lotteryID, setLotteryID] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      setTimeout(() => {
        let randNum = Math.ceil(Math.random() * (lotteryItems.length - 1));
        setLotteryID(randNum);
        if (lotteryID === randNum) {
          randNum = randNum + 1;
          setLotteryID(randNum);
        }
      }, 500);
    }
  }, [lotteryID, isPaused]);

  const lotteryItems = [
    "Car",
    "X",
    "X",
    "X",
    "Mobile",
    "X",
    "X",
    "$5000",
    "X",
    "X",
  ];
  const handelClick = () => {
    setIsPaused(!isPaused);
  };

  return (
    <>
      <div className="m-12 justify-between items-center">
        {lotteryItems.map((item, key) => {
          return (
            <ul
              key={key}
              className="shadow-2xl p-4 text-2xl"
              style={{ backgroundColor: key === lotteryID ? "red" : null }}
            >
              {item}
            </ul>
          );
        })}
        <div
          style={{ color: lotteryItems[lotteryID] === "X" ? "red" : "blue" }}
          className="flex-col justify-center items-center text-8 m-2 p-4 "
        >
          
          <div> 
            <button
              onClick={handelClick}
              className="bg-amber-700 p-2 rounded-2xl text-xl text-white mx-3"
            >
              {!isPaused ? "Pause" : "Start"}
            </button>
          </div>
          <div className="text-2xl items-center">
            {isPaused == true &&
              (lotteryItems[lotteryID] === "X"
                ? "You Lose"
                : ` Congratulation You Win ${lotteryItems[lotteryID]}`)}
          </div>
        </div>
      </div>
    </>
  );
};
export default Lottery;
