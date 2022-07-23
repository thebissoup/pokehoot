
import './App.css';
import React from "react";
import { PageLayout } from './components/Page';
import { useState } from 'react';
import "rsuite/dist/rsuite.min.css"


function App() {
  const[active, setActive] = useState("home")
  
  return (
    <PageLayout active={active} setActive={setActive}  />
  );
}

export default App;
