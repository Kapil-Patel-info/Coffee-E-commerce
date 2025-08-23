import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addtoCart } from "../cartSlice";
import BackEndUrl from "../config/BackEndUrl";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../css/search.css"

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query.trim()) {
        searchProducts(query);
      } else {
        setResults([]);
      }
    }, 300); // debounce search

    return () => clearTimeout(delayDebounce);
  }, [query]);

  const searchProducts = async (q) => {
    try {
      const res = await axios.get(`${BackEndUrl}/product/search?q=${q}`);
      setResults(res.data);
    } catch (err) {
      console.error("Search error:", err);
    }
  };

  return (
    <div className="container mt-4">
      <input
        type="text"
        placeholder="Search for coffee..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="form-control mb-4"
      />

      <Row className="g-4">
        {results.map((product) => (
          <Col xs={12} sm={6} md={4} lg={3} key={product._id}>
            <Card className="product-card h-100">
              <Card.Img
                variant="top"
                src={product.defaultImage}
                alt={product.name}
                className="product-image"
                onClick={() => navigate(`/productdisplay/${product._id}`)}
              />
              <Card.Body>
                <Card.Title
                  className="text-truncate"
                  onClick={() => navigate(`/productdisplay/${product._id}`)}
                  style={{ cursor: "pointer" }}
                >
                  {product.name}
                </Card.Title>
                <Card.Text className="product-desc">
                  <small>{product.description}</small>
                  <br />
                  <strong>Category:</strong> {product.category}
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
    </div>
  );
};

export default Search;
