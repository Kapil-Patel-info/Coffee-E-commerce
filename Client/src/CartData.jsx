import { useSelector, useDispatch } from "react-redux";
import Table from 'react-bootstrap/Table';
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { MdPriceChange } from "react-icons/md";
import Button from 'react-bootstrap/Button';
import { dataIncrease, dataDecrease, itemRemove } from "./cartSlice";
import './css/user/cart.css'; // Custom CSS

const CartData = () => {
  const cartData = useSelector(state => state.mycart.cart);
  const dispatch = useDispatch();

  let totalAmount = 0;

  const ans = cartData.map((item, index) => {
    const subtotal = item.price * item.qnty;
    totalAmount += subtotal;
    return (
      <tr key={item.id}>
        <td><img src={item.defaultImage} width="80" height="80" className="product-img" /></td>
        <td>{item.name}</td>
        <td>{item.description}</td>
        <td>{item.category}</td>
        <td>₹{item.price}</td>
        <td>
          <FaPlusCircle
            className="quantity-icon"
            onClick={() => dispatch(dataIncrease({ id: item.id }))}
          />{" "}
          {item.qnty}{" "}
          <FaMinusCircle
            className="quantity-icon"
            onClick={() => dispatch(dataDecrease({ id: item.id }))}
          />
        </td>
        <td>₹{subtotal}</td>
        <td>
          <Button
            variant="outline-danger"
            size="sm"
            onClick={() => dispatch(itemRemove({ id: item.id }))}
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

      <div className="cart-total">
        <MdPriceChange size={24} /> Total: ₹{totalAmount}
        <Button variant="warning" style={{ marginLeft: "20px" }}>Check Out</Button>
      </div>

      <Table striped bordered hover responsive className="cart-table">
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
          {ans}
          <tr>
            <td colSpan="6" className="text-end"><strong>Total</strong></td>
            <td><strong>₹{totalAmount}</strong></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default CartData;
