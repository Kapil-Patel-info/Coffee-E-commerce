import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import BackEndUrl from "../config/BackEndUrl";
import "../css/ProductDisplay.css"; // You’ll create this

const ProductDisplay = () => {
  const { id } = useParams();
  const [mydata, setMydata] = useState({});
  const [imglist, setimgList] = useState([]);
  const [DefaultImage, SetDefaultImage] = useState("");

  const loadData = async () => {
    try {
      const api = `${BackEndUrl}/product/productdisplay/?id=${id}`;
      const { data } = await axios.get(api);
      setMydata(data);
      setimgList(data.images);
      SetDefaultImage(data.defaultImage);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="product-page">
      <div className="left-section">
        <div className="thumbnails">
          {imglist.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="thumbnail"
              className="thumbnail"
              onMouseOver={() => SetDefaultImage(img)}
            />
          ))}
        </div>
        <div className="details">
          <span className="badge">INSTANT COFFEE</span>
          <h1>{mydata.name}</h1>
          <div className="rating">⭐ {mydata.rating || "4.3"} (1,203 reviews)</div>
          <p className="description">{mydata.description}</p>

          <div className="features">
            <div className="feature">✅ 100% Arabica</div>
            <div className="feature">❄️ Freeze Dried</div>
            <div className="feature">🧊 Hot or Cold</div>
            <div className="feature">🍃 No Preservatives</div>
          </div>

          <div className="price-section">
            <span className="original-price">₹{mydata.price + 500}</span>
            <span className="discount-price">₹{mydata.price}</span>
            <span className="discount-tag">20% OFF</span>
          </div>

          <div className="promo-banner">
            Use code <strong>NEWJAR20</strong> at checkout to get extra 20% OFF
          </div>

          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>

      <div className="right-section">
        <img src={DefaultImage} alt="Product" className="main-image" />
      </div>
    </div>
  );
};

export default ProductDisplay;
