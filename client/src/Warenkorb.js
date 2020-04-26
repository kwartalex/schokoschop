import React, { useState, useEffect } from "react";
import pickedCandyName from "./Start";
import pickedCandyPrice from "./Start";
import styled from "styled-components/macro";

export default function Produkte() {
  return (
    <>
      <ContentWrapper>
        <p>
          Your choice:
          {pickedCandyName}...nomnomnom
          {pickedCandyPrice} €.
        </p>
      </ContentWrapper>
    </>
  );
}
const ContentWrapper = styled.main`
  padding: 12px;
  overflow: scroll;

  button {
    background: hotpink;
    border-radius: 10px;
  }
`;
