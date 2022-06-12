
import './App.css';
import React from "react";
import { HomePage } from './components/HomePage';
import { TutorialPage} from "./components/TutorialPage";
import { CreatePage } from './components/CreatePage';
import { Routes, Route, Link} from "react-router-dom";

import "rsuite/dist/rsuite.min.css"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        {/*<Route path="/tutorial" element={<TutorialPage/>}></Route>*/}
        <Route path="/create" element={<CreatePage/>}></Route>
        {/*Library Route*/}
      </Routes>
    </div>
  );
}

export default App;
