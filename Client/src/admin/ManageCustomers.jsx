import { useState, useEffect } from "react";
import axios from "axios";
import BackendUrl from '../config/BackEndUrl';

const ManageCustomers = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadCustomerData = async () => {
    try {
      const response = await axios.get(`${BackendUrl}/user/allUsers`);
      setCustomers(response.data);
    } catch (error) {
      console.error("Error fetching customer data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCustomerData();
  }, []);

  return (
    <div>
      <h1>Manage Customers</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {customers.map((customer) => (
            <li key={customer._id}>
              {customer.name} - {customer.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ManageCustomers;
