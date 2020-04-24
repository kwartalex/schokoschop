import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";

export default function Produkte() {
  const [produkte, setProdukte] = useState([]);
  const [selectedProdukte, setSelectedProdukte] = useState([0])

useEffect(() => {
  fetch('http://localhost:8040/Produkte/get')
    .then((response) => response.json())
    .then((data) => setProdukte(data.reverse()))
}, [])

  return (
      <ContentWrapper>  
        <h1>Productlist from API</h1>
        <ul>
            {produkte.map(produkt => 
            <li>
                <h4>{produkt.name}</h4>
                <p>{produkt.description} ({produkt.price}€)</p>
                <button>Add to cart</button>
            </li>)}
        </ul>
      
      </ContentWrapper>
  )}

  const ContentWrapper = styled.main`
  padding: 12px;
  overflow: scroll;
  
  button {
    background: hotpink;
    border-radius: 10px;
  }
`
  
