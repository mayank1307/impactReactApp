import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home type={0}/>} />
      <Route path="/shortlisted" element={<Home type={1}/>} />
      <Route path="/rejected" element={<Home type={2}/>} />
      <Route path="/:id" element={<Home type={4} />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
