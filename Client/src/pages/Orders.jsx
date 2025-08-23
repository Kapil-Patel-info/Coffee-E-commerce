import { useState, useEffect } from "react";
import axios from "axios";
import BackEndUrl from "../config/BackEndUrl";
import "../css/Orders.css";

const Orders = () => {
  const [mydata, setMydata] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    try {
      const response = await axios.get(`${BackEndUrl}/admin/ourorder`);
      console.log(localStorage.getItem(userid));

      setMydata(response.data);
    } catch (error) {
      console.log("Error loading orders:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="orders-container">
      <h1 className="orders-title">Order Management</h1>

      {loading ? (
        <p className="loading-text">Loading orders...</p>
      ) : (
        <div className="table-responsive">
          <table className="orders-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Products</th>
                <th>Amount</th>
                <th>Order Date</th>
                <th>Expected Delivery</th>
                <th>Payment Status</th>
              </tr>
            </thead>
            <tbody>
              {mydata.map((order, index) => (
                <tr key={order._id || index}>
                  <td>{index + 1}</td>
                  <td className="products-cell">
                    {Array.isArray(order.products)
                      ? order.products.map((p, i) => (
                          <div key={i} className="product-item">
                            {p.name} (x{p.qnty})
                          </div>
                        ))
                      : order.products}
                  </td>
                  <td>₹{order.amount}</td>
                  <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                  <td>
                    {new Date(
                      new Date(order.createdAt).getTime() + 4 * 24 * 60 * 60 * 1000
                    ).toLocaleDateString()}
                  </td>
                  <td>
                    <span
                      className={`status-badge ${
                        order.payment_status === "Paid"
                          ? "paid"
                          : order.payment_status === "Pending"
                          ? "pending"
                          : "failed"
                      }`}
                    >
                      {order.payment_status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;
