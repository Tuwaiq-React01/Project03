import React, { useState, useEffect } from "react";

const Header = ({ todosCount }) => {
  const [today, setToday] = useState(new Date());

  useEffect(() => {
    setToday(new Date());
  }, []);
  const getCurrentDay = () => {
    return today.toLocaleString("en-us", { weekday: "long" }) + ", ";
  };

  const getCurrentDayNumber = () => {
    let dayNumber = today.getDate();
    let selector;
    if (dayNumber <= 0) {
      selector = 4;
    } else if ((dayNumber > 3 && dayNumber < 21) || dayNumber % 10 > 3) {
      selector = 0;
    } else {
      selector = dayNumber % 10;
    }
    return dayNumber + ["th", "st", "nd", "rd", ""][selector];
  };

  const getCurrentMonth = () => {
    return today.toLocaleString("default", { month: "long" });
  };

  return (
    <div className="max-w-2xl h-24 mx-auto px-8 py-6 rounded-t bg-gray-50">
      <div className="flex">
        <div className="flex-1">
          <p className="text-xl font-semibold inline text-violet-500">
            {getCurrentDay()}
          </p>
          <p className="text-xl  font-normal inline text-violet-500">
            {getCurrentDayNumber()}
          </p>
          <h4 className=" font-light text-gray-400">{getCurrentMonth()}</h4>
        </div>
        <span className="flex-1 text-right font-medium leading-10 pt-1 text-gray-500">
          {todosCount} <span className="font-light"> todos</span>
        </span>
      </div>
    </div>
  );
};

export default Header;
