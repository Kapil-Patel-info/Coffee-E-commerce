import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import BackEndUrl from "../config/BackEndUrl";
import '../css/user/ProductDetail.css';
import { useDispatch } from "react-redux";
import { addtoCart } from "../cartSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const res = await axios.get(`${BackEndUrl}/product/detail/${id}`);
        setProduct(res.data);
        setSelectedImage(res.data.images[0]);
      } catch (err) {
        console.error("Error loading product:", err);
      }
    };

    loadProduct();
  }, [id]);

  if (!product) return <h2 className="loading-text">Loading product details...</h2>;

  const handleAddToCart = () => {
    dispatch(addtoCart({
      id: product._id,
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category,
      images: product.images,
      defaultImage: product.defaultImage,
      qnty: 1
    }));
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate("/cartdata");
  };

  return (
    <div className="product-detail-container">
      <div className="product-gallery">
        <div className="thumbnail-list">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`thumb-${index}`}
              className={`thumbnail ${selectedImage === img ? 'active' : ''}`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>

        <div className="main-image">
          <img src={selectedImage} alt="Selected Product" />
        </div>
      </div>

      <div className="product-detail-info">
        <h1 className="product-title">{product.name}</h1>
        <p className="product-desc">{product.description}</p>
        <p className="product-meta"><strong>Category:</strong> {product.category}</p>

        <h3 className="product-price">₹ {product.price}</h3>

        <div className="action-buttons">
          <button className="btn btn-outline-dark luxury-btn" onClick={handleAddToCart}>🛒 Add to Cart</button>
          <button className="btn btn-dark luxury-btn buy-now-btn" onClick={handleBuyNow}>⚡ Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
