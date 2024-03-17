import Header from "./components/nav bar/Header";
import { Routes, Route } from "react-router-dom";
import History from "./pages/history/History";
import Statistics from "./pages/statistics/Statistics";
import DownloadApp from "./pages/download/DownloadApp";

function App() {
  return (
    <main className="max-w-screen min-h-screen overflow-x-hidden">
      <Header />

      <Routes>
        <Route path="/" element={<History />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/download" element={<DownloadApp />} />
      </Routes>
    </main>
  );
}

export default App;
