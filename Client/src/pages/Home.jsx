import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BackEndUrl from "../config/BackEndUrl";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Pagination from "react-bootstrap/Pagination";
import { useDispatch } from "react-redux";
import { addtoCart } from "../cartSlice";
import "../css/Home.css";

import img4 from "../images/four.png";
import img2 from "../images/two.png";
import img3 from "../images/three.png";
import upparBar from "../images/upperBar.png";
import footerimg from "../images/footerimg.png";
import lowerBar from "../images/lowerBar.png";

const Home = () => {
  const [mydata, setMydata] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Change how many products per page
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

  // Pagination calculations
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = mydata.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(mydata.length / itemsPerPage);

  return (
    <div className="home-wrapper">
      {/* Carousel */}
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

      {/* Bar image */}
      <div className="upperbar">
        <img src={upparBar} width="100%" alt="upperbar" />
      </div>

      <div className="section-title">Our Coffee Collection</div>

      {/* Product Grid */}
      <div className="product-grid m-5">
        {currentItems.map((product) => (
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


      <div className="d-flex justify-content-center mb-4">
        <Pagination>
          <Pagination.Prev
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          />
          {Array.from({ length: totalPages }, (_, i) => (
            <Pagination.Item
              key={i + 1}
              active={i + 1 === currentPage}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          />
        </Pagination>
      </div>

      {/* Lower bar */}
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
