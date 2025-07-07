import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import BackEndUrl from '../config/BackEndUrl';
import axios from 'axios';
const UploadProduct=()=>{
  const [input, setInput] = useState({});
  const [selectedImages, setSelectedImages] = useState("");
  const handleInput=(e)=>{
      let name=e.target.name;
      let value=e.target.value;
      setInput(values=>({...values, [name]:value}));
      console.log(input);
  }

  const handleImages=(e)=>{
      setSelectedImages(e.target.files);
      console.log(selectedImages);
  }
  const handleSubmit=async(e)=>{
         e.preventDefault();
        const formData= new FormData();
         for (var key in input)
         {
          formData.append(key, input[key]);
         }

           for (let i = 0; i < selectedImages.length; i++) {
            formData.append('images', selectedImages[i]);
        }
         let api=`${BackEndUrl}/admin/productsave`;
         const response = await axios.post(api, formData);
         console.log(response);
         alert("Product Save!")
  }

    return(
        <>
            <Form style={{width:"300px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Product Name</Form.Label>
        <Form.Control type="text" name="name" onChange={handleInput} />
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Product Description</Form.Label>
        <Form.Control type="text"  name="description" onChange={handleInput} />
      </Form.Group>

   <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Product Price</Form.Label>
        <Form.Control type="text" name="price"  onChange={handleInput} />
      </Form.Group>

        <Form.Select aria-label="Default select example"  name="category" onChange={handleInput}>
      <option>Select Categor</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="kids">Kids</option>
    </Form.Select>
       
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Upload Images</Form.Label>
        <Form.Control type="file"   onChange={handleImages}  multiple />
      </Form.Group>
     
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
        </>
    )
}

export default UploadProduct;