import { useState, useEffect } from "react";
import BackEndUrl from "../config/BackEndUrl";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addtoCart } from "../cartSlice";
import { useDispatch } from "react-redux";
import '../css/user/Home.css'; // 👈 Add this for custom styling

const Home = () => {
  const [mydata, setMydata] = useState([]);
  const dispatch = useDispatch();

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
    <div className="home-wrapper">
      <h1 className="home-heading">☕ Our Premium Coffee Products</h1>
      <div className="product-grid">
        {mydata.map((item) => (
          <Card key={item._id} className="product-card">
            <Card.Img variant="top" src={item.defaultImage} className="product-img" />
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
  );
};

export default Home;
