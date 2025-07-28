import { useState, useEffect } from "react";
import axios from "axios";
import BackEndUrl from "../config/BackEndUrl";
import Table from "react-bootstrap/Table";
 import { useNavigate } from 'react-router-dom';
 
import Carousel from "react-bootstrap/Carousel";

const ShowProducts = () => {
  const [mydata, setMydata] = useState([]);
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

  return (
    <>
      <h1 className="text-center my-4">All Products ({mydata.length})</h1>

 


      <div className="container">
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price (₹)</th>

              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {mydata.map((product, index) => (
              <tr key={product._id}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>

                <td>
                  {product.defaultImage ? (
                    <img
                      src={product.defaultImage}
                      alt={product.name}
                      width="80"
                      height="80"
                      style={{ objectFit: "cover" }}


                    />
                  ) : (
                    "No Image"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default ShowProducts;
