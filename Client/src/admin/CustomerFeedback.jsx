import { useEffect, useState } from "react";
import axios from "axios";
import BackendUrl from "../config/BackEndUrl.jsx";

const CustomerFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadFeedbacks = async () => {
    try {
      const response = await axios.get(`${BackendUrl}/admin/feedback`);
      setFeedbacks(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching feedbacks:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFeedbacks();
  }, []);

  return (
    <div className="p-4">
      <h2 className="mb-4">Customer Feedback</h2>
      {loading ? (
        <p>Loading feedbacks...</p>
      ) : feedbacks.length === 0 ? (
        <p>No feedbacks available.</p>
      ) : (
        <div className="list-group">
          {feedbacks.map((fb, index) => (
            <div key={index} className="list-group-item mb-2 shadow-sm rounded">
              <h6><strong>{fb.name}</strong></h6>
              <p className="mb-1">{fb.message}</p>
              <small className="text-muted">{fb.email}</small>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomerFeedback;
