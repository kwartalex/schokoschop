import React from "react";
import styled from "styled-components/macro";
export default function Header() {
  return (
    <HeaderStyled>
      <h1>SCHOKOSCHOP</h1>
    </HeaderStyled>
  );
}
const HeaderStyled = styled.header`
  border-bottom-left-radius: 8%;
  border-top-left-radius: 0;
  border-bottom-right-radius: 8%;
  border-top-right-radius: 0;
  background: var(--primary);
  width: 100%;
  height: 60px;
  h1 {
    color: white;
    text-align: center;
    margin-bottom: 0;
    margin-top: 16px;
  }
`;
