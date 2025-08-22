import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useRef } from "react";
import BackEndUrl from "../config/BackEndUrl";
import axios from "axios";
import "../css/UploadProduct.css";

const UploadProduct = () => {
  const [input, setInput] = useState({
    name: "",
    description: "",
    price: "",
    category: ""
  });

  const [selectedImages, setSelectedImages] = useState("");
  const fileInputRef = useRef(null);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const handleImages = (e) => {
    setSelectedImages(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    for (let key in input) {
      formData.append(key, input[key]);
    }

    for (let i = 0; i < selectedImages.length; i++) {
      formData.append("images", selectedImages[i]);
    }

    try {
      const api = `${BackEndUrl}/admin/productsave`;
      const response = await axios.post(api, formData);
      alert("Product Saved!");
      console.log(response);

      // Reset form inputs
      setInput({
        name: "",
        description: "",
        price: "",
        category: ""
      });
      setSelectedImages("");
      if (fileInputRef.current) {
        fileInputRef.current.value = null;
      }

    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  return (
    <div className="upload-form-wrapper">
      <h2 className="form-title">Add New Product</h2>
      <Form className="upload-form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={input.name}
            onChange={handleInput}
            placeholder="E.g. French Vanilla Coffee"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            name="description"
            value={input.description}
            onChange={handleInput}
            placeholder="Brief about the product"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Price (₹)</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={input.price}
            onChange={handleInput}
            placeholder="E.g. 599"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Select
            name="category"
            value={input.category}
            onChange={handleInput}
            required
          >
            <option value="">Select Category</option>
            <option value="espresso">Espresso</option>
            <option value="americano">Americano</option>
            <option value="cappuccino">Cappuccino</option>
            <option value="latte">Latte</option>
            <option value="mocha">Mocha</option>
            <option value="cold-brew">Cold Brew</option>
            <option value="macchiato">Macchiato</option>
            <option value="flat-white">Flat White</option>
            <option value="affogato">Affogato</option>
            <option value="frappuccino">Frappuccino</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Upload Product Images</Form.Label>
          <Form.Control
            type="file"
            onChange={handleImages}
            multiple
            required
            ref={fileInputRef} 
          />
          <Form.Text className="text-muted">
            You can select multiple images.
          </Form.Text>
        </Form.Group>

        <div className="text-end">
          <Button variant="dark" type="submit">
            Submit Product
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default UploadProduct;
