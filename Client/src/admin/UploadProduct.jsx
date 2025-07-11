import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import BackEndUrl from '../config/BackEndUrl';
import axios from 'axios';
import '../css/upload.css';

const UploadProduct = () => {
  const [input, setInput] = useState({});
  const [selectedImages, setSelectedImages] = useState([]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput(prev => ({ ...prev, [name]: value }));
  };

  const handleImages = (e) => {
    setSelectedImages(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (const key in input) {
      formData.append(key, input[key]);
    }

    for (let i = 0; i < selectedImages.length; i++) {
      formData.append('images', selectedImages[i]);
    }

    try {
      const token = localStorage.getItem("adminToken");
      const api = `${BackEndUrl}/admin/productsave`;

      const response = await axios.post(api, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      });

      alert("Product Saved!");
      console.log(response.data);
    } catch (error) {
      console.error("Error saving product:", error);
      alert("Failed to save product.");
    }
  };

  return (
    <div className="upload-wrapper">
      <div className="upload-card">
        <h2 className="text-center mb-4">📦 Upload New Product</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Product Name</Form.Label>
            <Form.Control type="text" name="name" onChange={handleInput} required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Product Description</Form.Label>
            <Form.Control type="text" name="description" onChange={handleInput} required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Product Price (₹)</Form.Label>
            <Form.Control type="number" name="price" onChange={handleInput} required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Product Category</Form.Label>
            <Form.Select name="category" onChange={handleInput} required>
              <option value="">Select Category</option>
              <option value="whole-bean">Whole Bean</option>
              <option value="ground">Ground Coffee</option>
              <option value="instant">Instant Coffee</option>
              <option value="cold-brew">Cold Brew</option>
              <option value="espresso">Espresso</option>
              <option value="filter-coffee">Filter Coffee</option>
              <option value="decaf">Decaf</option>
              <option value="pods-capsules">Pods & Capsules</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Upload Product Images</Form.Label>
            <Form.Control type="file" multiple onChange={handleImages} required />
          </Form.Group>

          <Button variant="dark" type="submit" className="w-100">Upload Product</Button>
        </Form>
      </div>
    </div>
  );
};

export default UploadProduct;
