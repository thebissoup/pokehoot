import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HomePage } from './components/HomePage';
import { CreatePage } from './components/CreatePage';
import { LibraryPage } from './components/LibraryPage';
import { CreateChoose } from './components/CreateChoose';
import { QuizForm } from './components/QuizForm';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import { PageLayout } from './components/PageLayout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route element={<PageLayout/>}>
            <Route path="" element={<HomePage/>}></Route>
            <Route path="create" element={<CreatePage/>}>
              <Route path="" element={<CreateChoose/>}/>
              
            </Route>
            <Route path="library" element={<LibraryPage/>}></Route>
          </Route>
          <Route path="new" element={<QuizForm/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
