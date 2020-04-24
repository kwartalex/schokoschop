import React, { useState } from 'react'
import GlobalStyles from "./GlobalStyles";
//import styled from "styled-components/macro";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import Start from "./Start"
import Produkt from "./Produkt"
import Warenkorb from "./Warenkorb"


export default function App() {

  return (
    <Router>
    <GlobalStyles />
    <Header />
    <Switch>
      <Route exact path="/">
        <Start />
      </Route>
      <Route path="/Produkt">
        <Produkt/>
      </Route>
      <Route path="/Warenkorb">
        <Warenkorb />
      </Route>
    </Switch>
    <Footer />
  </Router>
  )}

  
