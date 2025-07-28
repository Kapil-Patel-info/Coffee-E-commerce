const router = require("express").Router();
const Razorpay = require("razorpay");
const crypto = require("crypto");
const OrderModel = require("../models/orderModel");
require("dotenv").config();

router.post("/orders", async (req, res) => {
    try {
        const { amount, products, name, city, address, pincode, email } = req.body;

        if (!amount || amount <= 0) return res.status(400).json({ message: "Invalid amount" });
        if (!name || !email) return res.status(400).json({ message: "Name and email are required" });

        const instance = new Razorpay({
            key_id: process.env.KEY_ID,
            key_secret: process.env.KEY_SECRET
        });

        const order = await OrderModel.create({
            amount,
            products,
            clientname: name,
            city,
            address,
            pincode,
            email
        });

        const options = {
            amount: Math.round(amount * 100), // in paise
            currency: "INR",
            receipt: `order_rcptid_${order._id}`,
            notes: {
                order_id: order._id.toString(),
                customer_name: name
            }
        };

        const razorpayOrder = await instance.orders.create(options);

        await OrderModel.findByIdAndUpdate(order._id, {
            razorpay_order_id: razorpayOrder.id
        });

        res.status(200).json({
            data: razorpayOrder,
            order_id: order._id
        });

    } catch (error) {
        console.error("Order creation error:", error);
        res.status(500).json({ message: "Something went wrong while creating order", error: error.message });
    }
});

router.post("/verify", async (req, res) => {
    try {
        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature
        } = req.body;

        if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
            return res.status(400).json({ message: "Missing payment parameters" });
        }

        const sign = razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSignature = crypto
            .createHmac("sha256", process.env.KEY_SECRET)
            .update(sign.toString())
            .digest("hex");

        if (razorpay_signature === expectedSignature) {
            await OrderModel.findOneAndUpdate(
                { razorpay_order_id },
                {
                    payment_status: "completed",
                    razorpay_payment_id,
                    razorpay_signature
                }
            );
            return res.status(200).json({ message: "Payment verified successfully" });
        } else {
            return res.status(400).json({ message: "Invalid payment signature" });
        }

    } catch (error) {
        console.error("Verification error:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
});

module.exports = router;
