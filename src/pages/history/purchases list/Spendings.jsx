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
import { motion } from "framer-motion";

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
    <>
      <ul className="w-full md:w-1/2 bg-gray-300 rounded p-4 mx-auto my-4">
        {data.length > 0 ? (
          data.map((item, index) => (
            <motion.div
              key={item.id}
              className="w-7/8 bg-gray-200 shadow my-4 p-2 rounded"
              transition={{ delay: 0.2 * index }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
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
                  className="p-2 rounded bg-slate-800 text-white font-bold group"
                >
                  <span>{icons[item.category]}</span>
                  {/* tooltip */}
                  <span className="p-1 bg-gray-900 text-white text-xs md:text-sm absolute top-1/2 -trasnlate-y-full lg:-translate-y-1/2 left-full opacity-0 rounded duration-100 group-hover:opacity-100 group-hover:-translate-x-1/2 lg:group-hover:translate-x-2">
                    {item.category}
                  </span>
                </span>
              </li>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-xl font-bold p-4">
            No Spendings Yet...
          </p>
        )}
      </ul>

      <div className="w-full md:w-1/2 bg-gray-300 rounded p-4 mx-auto my-4">
        <p className="text-xl text-center font-bold underline">
          Total Spending: {totalSpending}
        </p>
      </div>
    </>
  );
};

export default Spendings;
