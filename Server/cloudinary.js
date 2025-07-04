

const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({ 
    cloud_name: 'coffee-ecommerce', 
    api_key: '618816192315285', 
    api_secret: '6f0BLHZw1D9vnEusGyv0sdSWIJY'
});


const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'product_images',
    allowed_formats: ['jpg', 'png', 'jpeg'],
    transformation: [{ width: 500, height: 500, crop: 'limit' }],
  },
});


module.exports = {
  cloudinary,
  storage
};



