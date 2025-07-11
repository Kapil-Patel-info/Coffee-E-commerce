// src/components/CartData.jsx

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Table from 'react-bootstrap/Table';
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { MdPriceChange } from "react-icons/md";
import Button from 'react-bootstrap/Button';
import {
  dataIncrease,
  dataDecrease,
  itemRemove
} from "../src/cartSlice";
import './css/user/cart.css';

const CartData = () => {
  const cartData = useSelector((state) => state.mycart.cart);
  const dispatch = useDispatch();

  let totalAmount = 0;

  const rows = cartData.map((item) => {
    const subtotal = item.price * item.qnty;
    totalAmount += subtotal;

    return (
      <tr key={item.id} className="cart-row">
        <td>
          <img
            src={item.defaultImage}
            alt={item.name}
            className="product-img"
          />
        </td>
        <td className="cart-product-name">{item.name}</td>
        <td>{item.description}</td>
        <td>{item.category}</td>
        <td>₹{item.price}</td>
        <td>
          <FaPlusCircle
            className="quantity-icon"
            onClick={() =>
              dispatch(dataIncrease({ id: item.id }))
            }
          />
          <span className="quantity-text">{item.qnty}</span>
          <FaMinusCircle
            className="quantity-icon"
            onClick={() =>
              dispatch(dataDecrease({ id: item.id }))
            }
          />
        </td>
        <td>₹{subtotal}</td>
        <td>
          <Button
            variant="outline-danger"
            size="sm"
            onClick={() =>
              dispatch(itemRemove({ id: item.id }))
            }
          >
            Remove
          </Button>
        </td>
      </tr>
    );
  });

  return (
    <div className="cart-wrapper">
      <h2 className="cart-heading">🛒 Your Cart</h2>

      <Table bordered responsive className="cart-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Product</th>
            <th>Description</th>
            <th>Category</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Subtotal</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rows}
          <tr className="cart-summary">
            <td colSpan="6" className="text-end">
              <strong>Total</strong>
            </td>
            <td>
              <strong>₹{totalAmount}</strong>
            </td>
            <td></td>
          </tr>
        </tbody>
      </Table>

      <div className="cart-bottom-bar">
        <div className="total-amount">
          <MdPriceChange size={24} />
          <span>
            Total Amount: <strong>₹{totalAmount}</strong>
          </span>
        </div>
        <Button variant="dark" size="lg" className="checkout-btn">
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};

export default CartData;
