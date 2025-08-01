import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BackEndUrl from "../config/BackEndUrl";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import { useDispatch } from "react-redux";
import { addtoCart } from "../cartSlice";
import "../css/Home.css";

import img4 from "../../public/four.png";
import img2 from "../../public/two.png";
import img3 from "../../public/three.png";
import upparBar from "../../public/upperBar.png";
import footerimg from "../../public/footerimg.png";
import lowerBar from "../../public/lowerBar.png";

const Home = () => {
  const [mydata, setMydata] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loadData = async () => {
    try {
      const response = await axios.get(`${BackEndUrl}/product/homedisplay`);
      setMydata(response.data);
    } catch (error) {
      console.error("Error loading products:", error);
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
        localStorage.removeItem("token");
        localStorage.removeItem("userValid");
      }
    }
  };

  useEffect(() => {
    loadData();
    authCheck();
  }, []);

  return (
    <div className="home-wrapper">
      <Carousel>
        <Carousel.Item>
          <img src={img4} alt="coffee banner 1" width="100%" height="100%" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={img2} alt="coffee banner 2" width="100%" height="100%" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={img3} alt="coffee banner 3" width="100%" height="100%" />
        </Carousel.Item>
      </Carousel>

      {/* //bar image  */}

      <div className="upperbar">
        <img src={upparBar} width="100%" alt="upperbar" />
      </div>

      <div className="section-title">Our Coffee Collection</div>

      <div className="product-grid m-5">
        {mydata.map((product) => (
          <Card className="product-card" key={product._id}>
            <Card.Img
              variant="top"
              src={product.defaultImage}
              alt={product.name}
              style={{ cursor: "pointer" }}
              className="product-image"
              onClick={() => navigate(`/productdisplay/${product._id}`)}
            />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>
                <small>{product.description}...</small>
                <br />
                <strong>Type:</strong> {product.category}
              </Card.Text>
              <h5 className="text-success">₹{product.price}</h5>
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

      {/* //lower bar  */}

      <div className="lowerbar">
        <img src={lowerBar} width="100%" alt="lowerbar" />
      </div>

      <div className="footerimg">
        <img src={footerimg} width="100%" alt="footerimg" />
      </div>
    </div>
  );
};

export default Home;
