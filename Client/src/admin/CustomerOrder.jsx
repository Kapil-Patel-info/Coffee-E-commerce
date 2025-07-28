import { useState, useEffect } from "react";
import BackEndUrl from "../config/BackEndUrl";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import "../css/CustomerOrder.css"; // optional custom styles

const CustomerOrder = () => {
  const [mydata, setMydata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadData = async () => {
    try {
      const api = `${BackEndUrl}/admin/ourorder`;
      const response = await axios.get(api);
      setMydata(response.data);
    } catch (err) {
      console.error("Failed to fetch orders:", err);
      setError("Something went wrong while fetching orders.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="order-wrapper">
      <h2 className="order-title">📦 Customer Orders</h2>

      {loading ? (
        <div className="text-center my-5">
          <Spinner animation="border" role="status" />
        </div>
      ) : error ? (
        <Alert variant="danger" className="text-center">
          {error}
        </Alert>
      ) : mydata.length === 0 ? (
        <Alert variant="info" className="text-center">
          No orders found!
        </Alert>
      ) : (
        <Table responsive striped bordered hover className="order-table">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Products</th>
              <th>Amount (₹)</th>
              <th>Customer</th>
              <th>City</th>
              <th>Address</th>
              <th>Pincode</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
           {mydata.map((order, index) => {
  

  return (
    <tr key={order._id || index}>
      <td>{index + 1}</td>
       <td>₹{order.products}</td>
      <td>₹{order.amount}</td>
      <td>{order.clientname}</td>
      <td>{order.city}</td>
      <td>{order.address}</td>
      <td>{order.pincode}</td>
      <td>{order.email}</td>
    </tr>
  );
})}

          </tbody>
        </Table>
      )}
    </div>
  );
};

export default CustomerOrder;
