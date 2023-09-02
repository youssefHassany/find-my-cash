import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../../../App";

const AddSpending = () => {
  const {
    dataObject,
    data,
    setData,
    calculateTotalSpendings,
    setTotalSpending,
  } = useContext(DataContext);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [selectedValue, setSelectedValue] = useState("others");

  const addNewSpending = (e) => {
    e.preventDefault();

    const updatedData = {
      ...dataObject,
      title: title,
      price: Number(price),
      category: selectedValue,
    };

    let newData = [...data, updatedData];
    setData(newData);
    setTitle("");
    setPrice("");
  };

  useEffect(() => {
    // This code will run whenever 'data' or 'calculateTotalSpendings' changes
    localStorage.setItem("find-my-cash-data", JSON.stringify(data));
    // Calculate total spendings without causing another useEffect invocation
    const total = data.reduce(
      (accumulator, item) => accumulator + item.price,
      0
    );
    setTotalSpending(total);
  }, [data, calculateTotalSpendings]);

  return (
    <form
      onSubmit={(e) => addNewSpending(e)}
      action=""
      className="w-full md:w-1/2 mx-auto my-4 bg-gray-300 bg-opacity-70 shadow rounded-xl p-3 flex flex-col justify-center items-center gap-2"
    >
      <div className="flex justify-center gap-2 flex-col lg:flex-row">
        <input
          required
          className="mb-2 shadow-lg p-2 rounded border-black border"
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          required
          className="mb-2 shadow-lg p-2 rounded border-black border"
          type="number"
          placeholder="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <select
          className="rounded border border-black"
          value={selectedValue}
          onChange={(e) => setSelectedValue(e.target.value)}
        >
          <option value="others">Others</option>
          <option value="shopping">Shopping</option>
          <option value="food">Food</option>
          <option value="entertainement">Entertainement</option>
          <option value="education">Education</option>
          <option value="health">Health</option>
          <option value="subscriptions">Subscriptions</option>
        </select>
        {/* todo: add AddCategory selection */}
      </div>

      <>
        <button
          type="submit"
          className="px-4 py-1 bg-emerald-600 text-white rounded font-bold"
        >
          Add
        </button>
      </>
    </form>
  );
};

export default AddSpending;
