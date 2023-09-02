import React from "react";
import Wallet from "./wallet/Wallet";
import SpendingsList from "./purchases list/SpendingsList";

const History = () => {
  return (
    <div className="px-8">
      <Wallet />
      <SpendingsList />
    </div>
  );
};

export default History;
