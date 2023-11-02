import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <FaShoppingCart style={{ color: 'blue' }}/>
      <span className="badge badge-pill bg-danger">5</span>
    </div>
  );
}

export default CartWidget;
