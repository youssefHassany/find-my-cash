import React from "react";

const SpendingForm = ({
  addNewSpending,
  title,
  setTitle,
  price,
  setPrice,
  selectedValue,
  setSelectedValue,
}) => {
  return (
    <form
      onSubmit={(e) => addNewSpending(e)}
      action=""
      className="w-full md:w-1/2 mx-auto my-4 bg-gray-300 bg-opacity-70 shadow rounded-xl p-3 flex flex-col justify-center items-center gap-2"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
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

export default SpendingForm;
