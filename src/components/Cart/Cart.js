import React from 'react';
import './Cart.css';

const Cart = (props) => {
  // console.log(props.cart);
  const { cart } = props;

  const totalReducer = (previous, product) => previous + product;
  const total = cart.reduce(totalReducer, 0);


  // previous two line or below single line or third three line all are run as same.
  // or



  /*  const total = cart.reduce((previous, product) => previous + product.price, 0)
  */


  // or


  /* let total = 0;
  for (const product of cart) {
    total = total + product.price;
  } */

  const shipping = 15;
  const tax = (total + shipping) * 10;
  const grandTotal = total + shipping + tax;


  return (
    <div>
      <h3>Order Summary</h3>
      <h5>Items Ordered: {props.cart.length}</h5>
      <br />
      <p>Total: {total.toFixed(2)}</p>
      <p>Shipping: {shipping}</p>
      <p>tax: {tax.toFixed(2)}</p>
      <p>Grand Total: {grandTotal.toFixed(2)}</p>
    </div>
  );
};

export default Cart;