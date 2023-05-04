import React from 'react'
import InsertCash from "./InsertCash";
import PurchasesMenu from "./PurchasesMenu";

import { useState } from "react";

const PurchaseHandle = () => {

    // for insert cash component
    const [cash, setCash] = useState(
        localStorage.getItem("cash") ? Number(localStorage.getItem("cash")) : ""
    );

    const handleChange = (e) => {
        setCash(e.target.value);
    };

    const saveCashToStorage = (currentCash) => {
        setCash(currentCash);
        localStorage.setItem("cash", currentCash);
        console.log(currentCash);
    };

    const setCashValue = (e) => {
        e.preventDefault();
        const currentCash = +cash;
        saveCashToStorage(currentCash);
    };

    const addToCash = () => {
        let currentCash = Number(localStorage.getItem("cash"));
        currentCash += +cash;
        saveCashToStorage(currentCash);
    };

    const resetCash = () => {
        const currentCash = 0;
        saveCashToStorage(currentCash);
    };

    
    // for the purchase menu component
    const [nameInp, setNameInp] = useState('');
    const [priceInp, setPriceInp] = useState('');

    const [purchases, setPurchases] = useState(localStorage.getItem('purchases') ? JSON.parse(localStorage.getItem('purchases')) : []);


    const handleNameInp = (e) => {
        const val = e.target.value;
        setNameInp(val)
    }

    const handlePriceInp = (e) => {
        const val = Number(e.target.value);
        setPriceInp(val)
    }

    const handleData = (e) => {
        e.preventDefault();
        const dataObj = {id: purchases.length + 1, purchase: nameInp, price: priceInp, date: Date.now()};
        const updatedPurchases = [...purchases, dataObj];
        savePurchasesToStorage(updatedPurchases);
        setNameInp('');
        setPriceInp('');
        calculateRemaining();
    }

    const clearData = () => {
        localStorage.removeItem('purchases');
        setPurchases([])
    }
    
    const savePurchasesToStorage = (purch) => {
        localStorage.setItem('purchases', JSON.stringify(purch))
        setPurchases(JSON.parse(localStorage.getItem('purchases')));
    }

    const removePurchase = (id) => {
        let remainedPurchases = purchases.filter((pur) => pur.id !== id);
        // console.log(remainedPurchases);
        savePurchasesToStorage(remainedPurchases)
        setPurchases(remainedPurchases);
    }
      
    // remainings section
    const [remaining, setRemaining] = useState('');

    const calculateRemaining = () => {
        let total = 0;
        purchases.forEach(pur => {
            total += pur.price;
        });
        let remainingValue = cash - total;
        setRemaining(remainingValue);
    }

  return (
    <section>
        <InsertCash
            cash={cash}
            handleChange={handleChange}
            setCashValue={setCashValue}
            addToCash={addToCash}
            resetCash={resetCash}
        />
        <PurchasesMenu
            nameInp={nameInp}
            priceInp={priceInp}
            purchases={purchases}
            cash={cash}
            remaining={remaining}
            handleNameInp={handleNameInp}
            handlePriceInp={handlePriceInp}
            handleData={handleData}
            clearData={clearData}
            savePurchasesToStorage={savePurchasesToStorage}
            removePurchase={removePurchase}
            calculateRemaining={calculateRemaining}
        />
    </section>
  )
}

export default PurchaseHandle