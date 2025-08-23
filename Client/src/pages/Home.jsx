import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BackEndUrl from "../config/BackEndUrl";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Pagination from "react-bootstrap/Pagination";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch } from "react-redux";
import { addtoCart } from "../cartSlice";
import "../css/Home.css";

import img4 from "../Images/four.png";
import img2 from "../Images/two.png";
import img3 from "../Images/three.png";
import upparBar from "../Images/upperBar.png";
import footerimg from "../Images/footerimg.png";
import lowerBar from "../Images/lowerBar.png";

const Home = () => {
  const [mydata, setMydata] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; 
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
          <img src={img4} alt="coffee banner 1" className="banner-img" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={img2} alt="coffee banner 2" className="banner-img" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={img3} alt="coffee banner 3" className="banner-img" />
        </Carousel.Item>
      </Carousel>

      {/* Bar image */}
      <div className="upperbar">
        <img src={upparBar} className="bar-img" alt="upperbar" />
      </div>

      <div className="section-title">Our Coffee Collection</div>

      {/* Product Grid */}
      <Row className="g-4 px-3 my-4">
        {currentItems.map((product) => (
          <Col xs={12} sm={6} md={4} lg={4} key={product._id}>
            <Card className="product-card h-100">
              <Card.Img
                variant="top"
                src={product.defaultImage}
                alt={product.name}
                className="product-image"
                onClick={() => navigate(`/productdisplay/${product._id}`)}
              />
              <Card.Body>
                <Card.Title className="text-truncate">{product.name}</Card.Title>
                
                <Card.Text className="product-desc">
                  <small>{product.description}...</small>
                  <br />
                  <strong>Type:</strong> {product.category}

                </Card.Text>
                <h5 className="text-success">₹{product.price}</h5>
                <Button
                  variant="dark"
                  className="w-100"
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
          </Col>
        ))}
      </Row>

      {/* Pagination */}
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
        <img src={lowerBar} className="bar-img" alt="lowerbar" />
      </div>

      <div className="footerimg">
        <img src={footerimg} className="bar-img" alt="footerimg" />
      </div>
    </div>
  );
};

export default Home;
