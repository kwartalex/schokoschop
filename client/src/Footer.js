import React, { useState } from 'react'
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import home from "./images/candies.png";
import products from "./images/love.png";
import cart from "./images/food-and-restaurant.png";



export default function Footer() {
  const navData = [
    { images: home, id: '/' },
    { images: products, id: '/Produkt' },
    { images: cart, id: '/Warenkorb' },
  ]

  return (
    <FooterStyled>
      <nav>
        {navData.map((item) => (
          <NavLink
            exact
            to={item.id}
            activeStyle={{
              filter: 'invert(100%)',
            }}
          >
            <img src={item.images} alt={item.id} />
          </NavLink>
        ))}
      </nav>
    </FooterStyled>
  )
}






const FooterStyled = styled.footer`
  border-bottom-left-radius: 0;
  border-top-left-radius: 8%;
  border-bottom-right-radius: 0;
  border-top-right-radius: 8%;
  background: var(--primary);
  width: 100%;
  height: 48px;
  
  nav {
  display: flex;
  justify-content: space-evenly;
  }
  
  img {
    box-sizing: content-box;
    height: 40px;
    margin-top: 4px;
    align-content: center;
    border-radius: 8%;
  }
`;
