import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSpendings } from "../../../state/spendings/totalSpendings";
import { addPurchase } from "../../../state/purchases/totalPurchases";
import SpendingForm from "./SpendingForm";

const AddSpending = () => {
  const purchases = useSelector((state) => state.totalPurchases.purchases);
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [selectedValue, setSelectedValue] = useState("others");

  const addNewSpending = (e) => {
    e.preventDefault();

    const newPurchase = {
      id: Date.now(),
      title: title,
      price: Number(price),
      category: selectedValue,
    };

    dispatch(addPurchase(newPurchase));

    setTitle("");
    setPrice("");
  };

  useEffect(() => {
    const totalPurchases = purchases.reduce(
      (accumulator, item) => accumulator + item.price,
      0
    );
    console.log(totalPurchases);

    dispatch(setSpendings(totalPurchases));
  }, [purchases]);

  return (
    <SpendingForm
      addNewSpending={addNewSpending}
      title={title}
      setTitle={setTitle}
      price={price}
      setPrice={setPrice}
      selectedValue={selectedValue}
      setSelectedValue={setSelectedValue}
    />
  );
};

export default AddSpending;
