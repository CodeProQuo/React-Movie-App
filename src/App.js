import React from 'react';
import './App.css';
import {BrowserRouter, Redirect } from "react-router-dom";
import Layout from './containers/Layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout />
      </div>
    </BrowserRouter>
  );
}

export default App;
