import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BackEndUrl from "../config/BackEndUrl";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from "react-redux";
import { addtoCart } from "../cartSlice";
import '../css/Home.css'; // Ensure you have the styles here

const Home = () => {
  const [mydata, setMydata] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loadData = async () => {
    try {
      const response = await axios.get(`${BackEndUrl}/product/homedisplay`);
      setMydata(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const authCheck = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const { data } = await axios.post(`${BackEndUrl}/user/authuser`, null, {
          headers: { "x-auth-token": token },
        });
        if (data) {
          localStorage.setItem("userValid", true);
          localStorage.setItem("username", data.name);
          localStorage.setItem("useremail", data.email);
          localStorage.setItem("userid", data._id);
        }
      } catch (error) {
        console.error("Auth failed:", error);
      }
    }
  };

  useEffect(() => {
    loadData();
    authCheck();
  }, []);

  return (
    <div className="home-wrapper">
      <h2 className="section-title">Our Premium Products</h2>
      <div className="product-grid">
        {mydata.map((product) => (
          <Card className="product-card" key={product._id}>
            <Card.Img
              variant="top"
              src={product.defaultImage}
              alt={product.name}
              className="product-image"
              onClick={() => navigate(`/productdisplay/${product._id}`)}
            />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>
                <small>{product.description.slice(0, 60)}...</small>
                <br />
                <strong>Category:</strong> {product.category}
                <br />
                <h5 className="mt-2 text-success">₹{product.price}</h5>
              </Card.Text>
              <Button
                variant="dark"
                onClick={() =>
                  dispatch(
                    addtoCart({
                      id: product._id,
                      name: product.name,
                      description: product.description,
                      price: product.price,
                      category: product.category,
                      images: product.images,
                      defaultImage: product.defaultImage,
                      qnty: 1,
                    })
                  )
                }
              >
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
