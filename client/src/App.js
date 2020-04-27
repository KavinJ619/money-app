import React from 'react';

import NavBar from "./components/NavBar"
import TransactionList from "./components/TransactionList"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { Container } from "reactstrap"
import TransactionStats from './components/TransactionStats';
import { Provider } from "react-redux";
import store from "./store"
import TransactionModal from './components/TransactionModal';
import ChartData from "./components/ChartData"
import RandomComp from"./components/RandomComp";

function App() {
  return (
    <Provider store={store} value={store}>
      <div className="App">
      
        <NavBar />
        <Container>
          <TransactionStats />
          <ChartData />
          <TransactionModal />
          <TransactionList />
          <RandomComp />
        </Container>
      
      </div>
    </Provider>
  );
}

export default App;
