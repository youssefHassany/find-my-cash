import React from "react";

// icons
import { AiOutlineShoppingCart, AiFillCloseCircle } from "react-icons/ai";
import {
  FaPizzaSlice,
  FaHospitalAlt,
  FaHandHoldingHeart,
} from "react-icons/fa";
import { CiCircleMore } from "react-icons/ci";
import { IoMdSchool } from "react-icons/io";
import { HiOutlineCurrencyDollar } from "react-icons/hi";

// utils
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { removePurchase } from "../../../state/purchases/totalPurchases";

const SpendingRow = () => {
  const purchases = useSelector((state) => state.totalPurchases.purchases);
  const dispatch = useDispatch();

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
      weekday: "long",
    };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <ul className="w-full md:w-1/2 bg-gray-300 rounded p-4 mx-auto my-4">
      {purchases.length > 0 ? (
        purchases.map((item, index) => (
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
                onClick={() => dispatch(removePurchase(item))}
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
        <p className="text-center text-xl font-bold p-4">No Spendings Yet...</p>
      )}
    </ul>
  );
};

export default SpendingRow;
