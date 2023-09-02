import { createContext, useEffect, useState } from "react";
import Header from "./components/nav bar/Header";
import { Routes, Route } from "react-router-dom";
import History from "./pages/history/History";
import Statistics from "./pages/statistics/Statistics";
import DownloadApp from "./pages/download/DownloadApp";

export const DataContext = createContext(null);

function App() {
  const dataObject = {
    id: Date.now(),
    title: "purchase",
    price: 0,
    category: "other",
  };

  const [totalSpending, setTotalSpending] = useState(0);

  const calculateTotalSpendings = () => {
    const storedData = localStorage.getItem("find-my-cash-data");

    if (storedData) {
      const parsedData = JSON.parse(storedData);
      const total = parsedData.reduce(
        (accumulator, item) => accumulator + item.price,
        0
      );

      setData(parsedData);
      setTotalSpending(total);
    }
  };

  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("find-my-cash-data")) || [] // if there's data in local storage then get it, else: make it an empty array
  );

  const [wallet, setWallet] = useState(
    Number(localStorage.getItem("find-my-cash-wallet")) || 0
  );

  return (
    <main className="max-w-screen min-h-screen overflow-x-hidden">
      <Header />

      <DataContext.Provider
        value={{
          dataObject,
          data,
          setData,
          wallet,
          setWallet,
          totalSpending,
          setTotalSpending,
          calculateTotalSpendings,
        }}
      >
        <Routes>
          <Route path="/" element={<History />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/download" element={<DownloadApp />} />
        </Routes>
      </DataContext.Provider>
    </main>
  );
}

export default App;
