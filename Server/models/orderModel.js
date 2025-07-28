const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true
    },
    products: {
        type: String,
        required: true
    }, 
    clientname: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    pincode: {
        type: Number,
        required: true
    }, 
    email: {
        type: String, 
        required: true
    },
    // Add payment-related fields
    razorpay_order_id: String,
    razorpay_payment_id: String,
    razorpay_signature: String,
    payment_status: {
        type: String,
        enum: ['pending', 'completed', 'failed'],
        default: 'pending'
    }
}, { timestamps: true });

module.exports = mongoose.model("order", orderSchema);




