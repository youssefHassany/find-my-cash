import React, { useContext } from "react";
import { DataContext } from "../../../App";

import { AiOutlineShoppingCart, AiFillCloseCircle } from "react-icons/ai";
import {
  FaPizzaSlice,
  FaHospitalAlt,
  FaHandHoldingHeart,
} from "react-icons/fa";
import { CiCircleMore } from "react-icons/ci";
import { IoMdSchool } from "react-icons/io";
import { HiOutlineCurrencyDollar } from "react-icons/hi";

const Spendings = () => {
  const { data, setData, totalSpending } = useContext(DataContext);

  const icons = {
    others: <CiCircleMore />,
    shopping: <AiOutlineShoppingCart />,
    food: <FaPizzaSlice />,
    entertainement: <FaHandHoldingHeart />,
    education: <IoMdSchool />,
    health: <FaHospitalAlt />,
    subscriptions: <HiOutlineCurrencyDollar />,
  };

  const getFormattedDate = (timestamp) => {
    const date = new Date(timestamp);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long", // Optional: Include the day of the week
    };
    return date.toLocaleDateString("en-US", options);
  };

  const removeSpending = (e) => {
    let newFilteredData = data.filter((item) => item !== e);

    setData(newFilteredData);
    localStorage.setItem("find-my-cash-data", JSON.stringify(newFilteredData));
  };

  return (
    <ul className="w-full md:w-1/2 bg-gray-300 rounded p-4 mx-auto my-4">
      {data.length > 0 ? (
        data.map((item) => (
          <li
            key={item.id} // id is equal to Date.now()
            className="p-2 w-full bg-white my-2 rounded flex justify-between items-center relative"
          >
            {/* delete task button */}
            <button
              onClick={() => removeSpending(item)}
              className="absolute top-0 right-0 -translate-y-1"
            >
              <AiFillCloseCircle />
            </button>

            <span>
              <p className="font-medium text-xl">
                {item.title}: {item.price}
              </p>
              <p className="text-xs lg:text-sm text-gray-500">
                {getFormattedDate(item.id)} {/* i want the date here */}
              </p>
            </span>
            <span
              title={item.category}
              className="p-2 rounded bg-slate-800 text-white font-bold"
            >
              {icons[item.category]}
            </span>
          </li>
        ))
      ) : (
        <p className="text-center text-xl font-bold p-4">No Spendings Yet...</p>
      )}
    </ul>
  );
};

export default Spendings;
