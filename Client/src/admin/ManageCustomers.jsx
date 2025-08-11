import { useState, useEffect } from "react";
import axios from "axios";
import BackendUrl from "../config/BackEndUrl";
import "../css/ManageCustomers.css";

const ManageCustomers = () => {
  const [customers, setCustomers] = useState([]);
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const loadCustomerData = async () => {
    try {
      const response = await axios.get(`${BackendUrl}/user/allUsers`);
      setCustomers(response.data);
      setFilteredCustomers(response.data);
    } catch (error) {
      console.error("Error fetching customer data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCustomerData();
  }, []);

  // Filter customers when search term changes
  useEffect(() => {
    const term = searchTerm.toLowerCase();
    const results = customers.filter(
      (c) =>
        c.name.toLowerCase().includes(term) ||
        c.email.toLowerCase().includes(term)
    );
    setFilteredCustomers(results);
  }, [searchTerm, customers]);

  return (
    <div className="customers-container">
      <h1 className="customers-heading">Manage Customers</h1>


      <input
        type="text"
        placeholder="Search by name or email..."
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {loading ? (
        <p className="loading">Loading...</p>
      ) : filteredCustomers.length === 0 ? (
        <p className="no-data">No customers found.</p>
      ) : (
        <div className="table-wrapper">
          <table className="customers-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.map((customer) => (
                <tr key={customer._id}>
                  <td>{customer.name}</td>
                  <td>{customer.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManageCustomers;
