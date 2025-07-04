import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import BackendURL from '../../../BackendURL';

const AdminInsert = () => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    description: '',
  });

  const [images, setImages] = useState([]);    //for images  
  const [previewUrls, setPreviewUrls] = useState([]); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length < 4) {
      alert("Please select at least 4 images.");
      return;
    }
    setImages(files);
    setPreviewUrls(files.map(file => URL.createObjectURL(file)));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("category", formData.category);
    data.append("price", formData.price);
    data.append("description", formData.description);
    images.forEach(image => {
      data.append("images", image);
    });

    try {
      const res = await axios.post(`${BackendURL}/admin/uploadProduct`, data);
      alert("Product uploaded successfully!");
      console.log(res.data);

    } catch (error) {
      console.error(error);
      alert("Upload failed!");
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="p-4">
      {/* Input fields */}
      {["name", "category", "price", "description"].map((field, idx) => (
        <Form.Group className="mb-3" key={idx}>
          <Form.Label>{field.charAt(0).toUpperCase() + field.slice(1)}</Form.Label>
          <Form.Control
            type={field === "description" ? "textarea" : "text"}
            name={field}
            value={formData[field]}
            onChange={handleInputChange}
            rows={field === "description" ? 3 : undefined}
          />
        </Form.Group>
      ))}

      <Form.Group className="mb-3">
        <Form.Label>Upload Product Images (Min: 4)</Form.Label>
        <Form.Control
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageChange}
        />
        <div className="d-flex mt-3 gap-2 flex-wrap">
          {previewUrls.map((url, index) => (
            <img key={index} src={url} alt={`preview-${index}`} width={100} height={100} />
          ))}
        </div>
      </Form.Group>

      <Button type="submit">Submit Product</Button>
    </Form>
  );
};

export default AdminInsert;
