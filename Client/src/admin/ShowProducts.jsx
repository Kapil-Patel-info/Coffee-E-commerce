import { useState, useEffect } from "react";
import axios from "axios";
import BackEndUrl from "../config/BackEndUrl";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";

const ShowProducts = () => {
  const [mydata, setMydata] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const loadData = async () => {
    try {
      const response = await axios.get(`${BackEndUrl}/product/homedisplay`);
      setMydata(response.data);
    } catch (error) {
      console.error("Error loading products:", error);
      alert("Failed to load products.");
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const deleteProduct = async (id) => {
    if (!window.confirm("Are you sure you want to remove this product?")) return;
    try {
      const api = `${BackEndUrl}/admin/deleteProduct?id=${id}`;
      await axios.delete(api);
      loadData();
    } catch (err) {
      console.log(err);
    }
  };

  // Filter products based on search term
  const filteredProducts = mydata.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container my-5">
      <h1 className="text-center fw-bold mb-4">
        📦 All Products <span className="text-muted">({mydata.length})</span>
      </h1>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control shadow-sm"
          placeholder="🔍 Search by name or description..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Desktop Table View */}
      <div className="shadow-lg p-4 rounded bg-white d-none d-md-block">
        <Table hover responsive className="align-middle text-center">
          <thead className="table-dark sticky-top">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price (₹)</th>
              <th>Image</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product, index) => (
              <tr key={product._id} className="product-row">
                <td className="fw-bold">{index + 1}</td>
                <td className="text-primary">{product.name}</td>
                <td style={{ maxWidth: "250px" }}>{product.description}</td>
                <td className="fw-semibold">₹{product.price}</td>
                <td>
                  {product.defaultImage ? (
                    <img
                      src={product.defaultImage}
                      alt={product.name}
                      className="rounded shadow-sm"
                      style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <span className="text-muted">No Image</span>
                  )}
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-outline-danger rounded-pill px-3"
                    onClick={() => deleteProduct(product._id)}
                  >
                    🗑 Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* Mobile Card View */}
      <div className="d-block d-md-none">
        {filteredProducts.map((product) => (
          <div
            key={product._id}
            className="card mb-3 shadow-sm border-0"
            style={{ borderRadius: "12px" }}
          >
            <div className="row g-0">
              <div className="col-4">
                {product.defaultImage ? (
                  <img
                    src={product.defaultImage}
                    alt={product.name}
                    className="img-fluid rounded-start"
                    style={{
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <div className="bg-light text-muted d-flex align-items-center justify-content-center h-100">
                    No Image
                  </div>
                )}
              </div>
              <div className="col-8">
                <div className="card-body p-2">
                  <h6 className="card-title fw-bold mb-1">{product.name}</h6>
                  <p className="card-text small text-muted mb-1">
                    {product.description}
                  </p>
                  <p className="fw-semibold text-success mb-2">
                    ₹{product.price}
                  </p>
                  <button
                    className="btn btn-sm btn-outline-danger w-100"
                    onClick={() => deleteProduct(product._id)}
                  >
                    🗑 Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>
        {`
          .product-row:hover {
            background-color: #f8f9fa;
            transition: background 0.3s ease;
          }
        `}
      </style>
    </div>
  );
};

export default ShowProducts;
