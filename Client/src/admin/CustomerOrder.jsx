import { useState, useEffect } from "react";
import BackEndUrl from "../config/BackEndUrl";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import Pagination from "react-bootstrap/Pagination";
import "../css/CustomerOrder.css";

const CustomerOrder = () => {
  const [mydata, setMydata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

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


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = mydata.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(mydata.length / itemsPerPage);

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
        <>
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
              {currentItems.map((order, index) => (
                <tr key={order._id || index}>
                  <td>{indexOfFirstItem + index + 1}</td>
                  <td>{order.products}</td>
                  <td>₹{order.amount}</td>
                  <td>{order.clientname}</td>
                  <td>{order.city}</td>
                  <td>{order.address}</td>
                  <td>{order.pincode}</td>
                  <td>{order.email}</td>
                </tr>
              ))}
            </tbody>
          </Table>


          <Pagination className="justify-content-center">
            <Pagination.Prev
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            />
            {[...Array(totalPages)].map((_, i) => (
              <Pagination.Item
                key={i + 1}
                active={i + 1 === currentPage}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            />
          </Pagination>
        </>
      )}
    </div>
  );
};

export default CustomerOrder;
