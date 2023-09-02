import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../../../App";

import Swal from "sweetalert2";
import WalletForm from "./WalletForm";

const Wallet = () => {
  const { totalSpending } = useContext(DataContext);

  const { wallet, setWallet } = useContext(DataContext);
  const [walletInpValue, setWalletInpValue] = useState("");
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    // Update the wallet state when the local storage value changes
    const walletFromStorage = localStorage.getItem("find-my-cash-wallet");
    setWallet((walletFromStorage && walletFromStorage - totalSpending) || 0);
  }, [totalSpending]);

  const handleSubmitWallet = (e) => {
    e.preventDefault();

    localStorage.setItem("find-my-cash-wallet", walletInpValue);

    // Update the wallet state immediately after updating local storage
    // let newBalance = walletInpValue - totalSpending;
    // setWallet(newBalance);

    setFormVisible(false);

    Swal.fire("Done!", "Your current cash is submitted!", "success");
  };

  return (
    <section className="w-11/12 lg:w-1/2 mx-auto h-80 flex items-center justify-center">
      {/* circle */}
      <div className="w-full h-full absolute top-0 left-0 -translate-y-1/2 rounded-full -z-10 bg-gradient-to-r from-green-500 to-emerald-500"></div>

      <div
        className={`p-8 bg-white border border-black rounded w-96 overflow-hidden mx-auto`}
      >
        <div className="flex justify-between items-center w-full">
          <div>
            <p className="text-gray-500">wallet</p>
            <h1 className="text-5xl font-bold">{wallet}</h1>
          </div>

          <button
            onClick={() => {
              setFormVisible(true);
            }}
            className="px-2 py-1 text-xl text-white rounded font-bold bg-emerald-600 hover:px-3 hover:shadow duration-300"
          >
            +
          </button>
        </div>

        <WalletForm
          handleSubmitWallet={handleSubmitWallet}
          walletInpValue={walletInpValue}
          setWalletInpValue={setWalletInpValue}
          formVisible={formVisible}
          setFormVisible={setFormVisible}
        />
      </div>
    </section>
  );
};

export default Wallet;
