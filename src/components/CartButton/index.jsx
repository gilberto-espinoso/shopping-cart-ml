import React, { useContext } from 'react'
import { BsCart } from "react-icons/bs";

import './styles.css'
import AppContext from '../../context/AppContext';

function CartButton() {
  const { cartItems } = useContext(AppContext)

  return ( 
  <button className="cart__button">
    <BsCart />
    {cartItems.length> 0 && (
      <span className="cart__status">{cartItems.length}</span>
    )}
  </button> 
  );
}

export default CartButton;