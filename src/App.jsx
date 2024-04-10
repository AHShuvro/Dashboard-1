import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Topbar from "./Scense/Global/Topbar";
import Sidebar from "./Scense/Global/Sidebar";
import Dashboard from "./Scense/Dashboard/Dashboard";
import PieChartComponent from "./Scense/Charts/PieChartComponent";

function App() {
  const [mode, setMode] = useState(localStorage.getItem('theme') || 'light');

  const toggleMode = () => {
    setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    localStorage.setItem('theme', mode);
  }, [mode]);

  return (
    <React.StrictMode>
      <Router>
        <div className={`${mode} flex bg-[#EEEEEE] dark:bg-[#151929] gap-6 px-4 lg:px-0 lg:pr-6`}>
          <div className="w-[18.75rem] hidden lg:block">
            <div className="w-[18.75rem] h-screen bg-[#F8F8F8] dark:bg-[#1C2438] fixed overflow-y-scroll scroll- z-50">
              <Sidebar />
            </div>
          </div>
          <div className="flex-1 min-h-screen">
            <div className="sticky top-0 z-50">
              <Topbar toggleMode={toggleMode} />
            </div>
            <div>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/pie" element={<PieChartComponent />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </React.StrictMode>
  );
}

export default App;

