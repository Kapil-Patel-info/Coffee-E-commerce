import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BackEndUrl from "../config/BackEndUrl";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { addtoCart } from "../cartSlice";
import "../css/user/Home.css";
import banner1 from "../images/AdobeStock_649900595_Preview.jpeg";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/signup");
      return;
    }

    const fetchUser = async () => {
      try {
        const res = await axios.get(`${BackEndUrl}/user/authenticate`, {
          headers: {
            "auth-token": token,
          },
        });
        setUser(res.data);
      } catch (err) {
        console.error(err);
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        navigate("/signup");
      }
    };

    fetchUser();
  }, [navigate]);

  const loadData = async () => {
    try {
      const response = await axios.get(`${BackEndUrl}/product/homedisplay`);
      setProducts(response.data);
    } catch (error) {
      console.error("Error loading products:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigate("/signup");
  };

  return (
    <>
      <div className="home-topbar">
        {user && <h6>Welcome, {user.name} 👋</h6>}
        <Button
          variant="outline-danger"
          onClick={handleLogout}
          className="logout-btn"
        >
          Logout
        </Button>
      </div>

      <img src={banner1} className="banner  " alt="" />

      <div className="home-wrapper">
        <h1 className="home-heading">☕ Our Premium Coffee Products</h1>
        <div className="product-grid">
          {products.map((item) => (
            <Card key={item._id} className="product-card">
              <Card.Img
                variant="top"
                src={item.defaultImage}
                className="product-img"
                onClick={() => navigate(`/productDetail/${item._id}`)}
              />

              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  <span className="product-category">
                    Category: {item.category}
                  </span>
                </Card.Text>
                <h4 className="product-price">₹ {item.price}</h4>
                <Button
                  variant="dark"
                  onClick={() =>
                    dispatch(
                      addtoCart({
                        id: item._id,
                        name: item.name,
                        description: item.description,
                        price: item.price,
                        category: item.category,
                        images: item.images,
                        defaultImage: item.defaultImage,
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
    </>
  );
};

export default Home;
