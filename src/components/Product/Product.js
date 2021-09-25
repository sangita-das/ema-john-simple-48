import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
  // console.log(props.product);
  const { name, img, seller, price, stock } = props.product;
  const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h4 className="product-name">{name}</h4>
        <p><small>by: {seller}</small></p>
        <p>Price: {price}</p>
        <p><small>only {stock} 91 left in stock - order soon add to cart</small></p>
        <button
          onClick={() => props.handleAddToCart(props.product)}
          className="btn-regular-purchase"
        >{cartIcon}Add to cart</button>
      </div>
    </div>
  );
};

export default Product;