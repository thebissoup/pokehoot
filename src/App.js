
import './App.css';
import React from "react";

import { useState } from 'react';
import "rsuite/dist/rsuite.min.css";
import { Outlet } from 'react-router-dom';


function App() {
  const[active, setActive] = useState("");
  
  return (
    <Outlet context={[active, setActive]}/>
  );
}

export default App;
