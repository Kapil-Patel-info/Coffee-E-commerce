import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";
import BackEndUrl from "../config/BackEndUrl";

const CheckOut = () => {
    const navigate = useNavigate();
    const cartData = useSelector(state => state.mycart.cart);
    const [mydata, setMydata] = useState({});
    const [loading, setLoading] = useState(false);

    const loadData = async () => {
        try {
            const userId = localStorage.getItem("userid");
            const response = await axios.get(`${BackEndUrl}/user/getuser/?userid=${userId}`);
            setMydata(response.data);
        } catch (error) {
            alert("Failed to load user data. Please try again.");
        }
    };

    useEffect(() => {
        if (!localStorage.getItem("username")) {
            navigate("/login");
        } else {
            loadData();
        }
    }, []);

    let totalAmount = 0;
    let productName = "";
    let proImage = "";

    if (cartData?.length > 0) {
        cartData.forEach(item => {
            totalAmount += item.price * item.qnty;
            productName += item.name + ", ";
            if (!proImage && item.defaultImage) proImage = item.defaultImage;
        });
        productName = productName.slice(0, -2);
    }

    const initPay = (data) => {
        const options = {
            key: "rzp_test_N6Mk5qdLZmYD35", // your Razorpay key
            amount: data.amount,
            currency: data.currency,
            name: "Your Store",
            description: productName,
            image: proImage,
            order_id: data.id,
            handler: async (response) => {
                try {
                    setLoading(true);
                    const verifyRes = await axios.post(`${BackEndUrl}/api/payment/verify`, response);
                    if (verifyRes.data.message === "Payment verified successfully") {
                        alert("Payment successful!");
                        navigate("/orders");
                    }
                } catch (err) {
                    alert("Payment verification failed. Contact support.");
                } finally {
                    setLoading(false);
                }
            },
            prefill: {
                name: mydata.name,
                email: mydata.email,
                contact: mydata.phone
            },
            notes: {
                address: mydata.address,
                city: mydata.city
            },
            theme: { color: "#3399cc" }
        };

        const razorpay = new window.Razorpay(options);
        razorpay.on("payment.failed", function (res) {
            alert("Payment failed: " + res.error.description);
        });
        razorpay.open();
    };

    const handlePay = async () => {
        if (!mydata.name || !mydata.email || !mydata.address || !mydata.city || !mydata.pincode) {
            return alert("Please complete your profile.");
        }

        if (cartData.length === 0 || totalAmount <= 0) {
            return alert("Cart is empty.");
        }

        setLoading(true);
        try {
            const res = await axios.post(`${BackEndUrl}/api/payment/orders`, {
                amount: totalAmount,
                products: productName,
                name: mydata.name,
                city: mydata.city,
                address: mydata.address,
                pincode: mydata.pincode,
                email: mydata.email
            });

            initPay(res.data.data);
           
        } catch (err) {
            alert("Payment failed: " + (err.response?.data?.message || "Unknown error"));
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <h1>Checkout</h1>
            <h3 style={{ textAlign: "center" }}>Net Payable Amount: ₹{totalAmount}</h3>

            <div style={{ margin: "20px auto", maxWidth: "600px" }}>
                <h4>Order Summary:</h4>
                {cartData.length > 0 ? (
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Qty</th>
                                <th>Price</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartData.map((item, idx) => (
                                <tr key={idx}>
                                    <td>{item.name}</td>
                                    <td>{item.qnty}</td>
                                    <td>₹{item.price}</td>
                                    <td>₹{item.price * item.qnty}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                ) : <p>No items in cart.</p>}
            </div>

            <Form style={{ width: "300px", margin: "auto" }}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control value={mydata.name || ""} readOnly />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control value={mydata.email || ""} readOnly />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control value={mydata.address || ""} readOnly />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>City</Form.Label>
                    <Form.Control value={mydata.city || ""} readOnly />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Pincode</Form.Label>
                    <Form.Control value={mydata.pincode || ""} readOnly />
                </Form.Group>
                <Button
                    variant="primary"
                    onClick={handlePay}
                    disabled={loading}
                    style={{ width: "100%" }}
                >
                    {loading ? "Processing..." : `Pay ₹${totalAmount}`}
                </Button>
            </Form>
        </>
    );
};

export default CheckOut;
