import React from "react";

const WalletForm = ({
  handleSubmitWallet,
  walletInpValue,
  setWalletInpValue,
  formVisible,
  setFormVisible,
}) => {
  return (
    <div
      className={`fixed w-screen h-screen top-0 left-0 z-30 bg-black bg-opacity-70 flex justify-center items-center ${
        formVisible ? "" : "hidden"
      }`}
    >
      <button
        onClick={() => setFormVisible(!formVisible)}
        className="text-3xl text-white absolute top-20 right-16"
      >
        X
      </button>
      <form
        className="w-96 p-8 border-2 border-black rounded bg-white flex flex-col gap-2 md:flex-row items-center justify-between"
        onSubmit={(e) => handleSubmitWallet(e)}
      >
        <input
          className="border-2 border-black rounded p-4"
          type="number"
          placeholder="Enter Current Money"
          required
          onChange={(e) => setWalletInpValue(e.target.value)}
          value={walletInpValue}
        />
        <button
          type="submit"
          className="px-4 py-2 rounded text-white bg-emerald-600 font-medium hover:opacity-80"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default WalletForm;
