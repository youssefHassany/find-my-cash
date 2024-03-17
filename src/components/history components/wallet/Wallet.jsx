import React, { useState, useEffect } from "react";
import WalletForm from "./WalletForm";
import { useGetWallet } from "../../../hooks/useGetWallet";
import ClearDataButton from "../../../components/clearDataButton/ClearDataButton";
import Circle from "../../../components/circle/Circle";
import { useSelector } from "react-redux";

const Wallet = () => {
  const totalSpending = useSelector((state) => state.totalSpendings.spendings);

  const [wallet, setWallet] = useState(useGetWallet());
  const initital = useGetWallet();

  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    // Update the wallet state when the total spendings value changes
    setWallet((wallet && initital - totalSpending) || initital);
    // console.log(totalSpending);
  }, [totalSpending]);

  return (
    <section className="w-11/12 lg:w-1/2 mx-auto h-80 flex items-center justify-center">
      <Circle />

      <div
        className={`p-8 bg-white border border-black rounded w-96 overflow-hidden relative mx-auto`}
      >
        <div className="flex justify-between items-center w-full">
          <div>
            <p className="text-gray-500">wallet</p>
            <h1 className="text-5xl font-bold">{wallet}</h1>
          </div>

          <div>
            <button
              onClick={() => {
                setFormVisible(true);
              }}
              className="px-2 py-1 text-xl text-white rounded font-bold bg-emerald-600 hover:px-3 hover:shadow duration-300"
            >
              +
            </button>

            <ClearDataButton setWallet={setWallet} />
          </div>
        </div>

        <WalletForm
          formVisible={formVisible}
          setFormVisible={setFormVisible}
          setWallet={setWallet}
        />
      </div>
    </section>
  );
};

export default Wallet;
