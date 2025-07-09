import { useState, useEffect } from "react";
import BackEndUrl from "../config/BackEndUrl";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addtoCart } from "../cartSlice";
import { useDispatch } from "react-redux";
import '../css/user/Home.css'; 
import bannerOne from '../images/1.png';
import bannerTwo from '../images/2.png';
import bannerThree from '../images/3.png';
import bannerFour from '../images/4.png';
import bannerFive from '../images/5.png';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [mydata, setMydata] = useState([]);
  const dispatch = useDispatch();

  const  navigate = useNavigate();

  const loadData = async () => {
    let api = `${BackEndUrl}/product/homedisplay`;
    try {
      const response = await axios.get(api);
      setMydata(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return (

<>

<h6> Welcome : {localStorage.getItem("userId")}</h6>

<Carousel>
          <Carousel.Item>
            <img
              src={bannerOne}
              width="100%"
              height="650"
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/watch`)}
            />
          </Carousel.Item>


          <Carousel.Item>
            <img
              src={bannerTwo}
              width="100%"
              height="650"
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/iphone`)}
            />
          </Carousel.Item>


          <Carousel.Item>
            <img
              src={bannerThree}
              width="100%"
              height="650"
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/macbook`)}
            />
          </Carousel.Item>


 <Carousel.Item>
            <img
              src={bannerFour}
              width="100%"
              height="650"
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/macbook`)}
            />
          </Carousel.Item>


           <Carousel.Item>
            <img
              src={bannerFive}
              width="100%"
              height="650"
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/macbook`)}
            />
          </Carousel.Item>

        </Carousel>

    
    <div className="home-wrapper">
      <h1 className="home-heading">☕ Our Premium Coffee Products</h1>
      <div className="product-grid">
        {mydata.map((item) => (
          <Card key={item._id} className="product-card">

            <Card.Img variant="top" src={item.defaultImage} className="product-img"   onClick={() => navigate(`/productDetail/${item._id}`)} />
            
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
                {item.description} <br />
                <span className="product-category">Category: {item.category}</span>
              </Card.Text>
              <h4 className="product-price">₹ {item.price}</h4>
              <Button
                variant="dark"
                onClick={() =>
                  dispatch(addtoCart({
                    id: item._id,
                    name: item.name,
                    description: item.description,
                    price: item.price,
                    category: item.category,
                    images: item.images,
                    defaultImage: item.defaultImage,
                    qnty: 1
                  }))
                }>
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

