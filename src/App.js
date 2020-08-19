import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Layout from './containers/Layout/Layout';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout />
      </div>
    </BrowserRouter>
  );
};

export default App;
