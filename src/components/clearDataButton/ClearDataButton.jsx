import React from "react";
import { useDispatch } from "react-redux";
import { clearPurchases } from "../../state/purchases/totalPurchases";
import { clearSpendings } from "../../state/spendings/totalSpendings";
import Swal from "sweetalert2";

const ClearDataButton = ({ setWallet }) => {
  const dispatch = useDispatch();
  return (
    <button
      title="clear"
      className="px-2 py-1 ml-1 text-xl text-white rounded font-bold bg-gray-600 hover:px-3 hover:shadow duration-300"
      onClick={() => {
        Swal.fire({
          title: "Are you sure?",
          text: "This will clear your wallet and spendings data!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire("Deleted!", "Your data has been cleared.", "success");

            // Clear the data after user confirmation
            dispatch(clearPurchases());
            dispatch(clearSpendings());
            setWallet(0);
          }
        });
      }}
    >
      C
    </button>
  );
};

export default ClearDataButton;
