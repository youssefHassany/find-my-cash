import React from "react";
import Wallet from "./wallet/Wallet";
import Spendings from "../../components/history components/purchases list/Spendings";

const History = () => {
  return (
    <div className="px-8">
      <Wallet />
      <Spendings />
    </div>
  );
};

export default History;
