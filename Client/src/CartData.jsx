import { useSelector, useDispatch } from "react-redux";
import { Container, Table, Button, Card, Row, Col, Badge } from 'react-bootstrap';
import { FaPlusCircle, FaMinusCircle, FaTrash, FaArrowLeft } from "react-icons/fa";
import { MdPriceChange, MdShoppingCart } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { dataIncrease, dataDecrease, itemRemove } from "./cartSlice";

const CartData = () => {
    const cartData = useSelector(state => state.mycart.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let totalAmount = 0;
    const cartItems = cartData.map((item) => {
        totalAmount += item.price * item.qnty;
        return (
            <tr key={item.id} className="align-middle">
                <td>
                    <img 
                        src={item.defaultImage} 
                        width="80" 
                        height="80" 
                        className="rounded"
                        alt={item.name}
                    />
                </td>
                <td className="fw-bold">{item.name}</td>
                <td className="text-muted small">{item.description}</td>
                <td>
                    <Badge bg="secondary">{item.category}</Badge>
                </td>
                <td>₹{item.price.toFixed(2)}</td>
                <td>
                    <div className="d-flex align-items-center gap-2">
                        <FaMinusCircle 
                            className="text-primary cursor-pointer" 
                            onClick={() => dispatch(dataDecrease({ id: item.id }))} 
                        />
                        <span className="px-2">{item.qnty}</span>
                        <FaPlusCircle 
                            className="text-primary cursor-pointer" 
                            onClick={() => dispatch(dataIncrease({ id: item.id }))} 
                        />
                    </div>
                </td>
                <td className="fw-bold">₹{(item.qnty * item.price).toFixed(2)}</td>
                <td>
                    <Button 
                        variant="outline-danger" 
                        size="sm"
                        onClick={() => dispatch(itemRemove({ id: item.id }))}
                    >
                        <FaTrash />
                    </Button>
                </td>
            </tr>
        );
    });

    return (
        <Container className="py-5">
            <Button 
                variant="outline-secondary" 
                className="mb-4" 
                onClick={() => navigate(-1)}
            >
                <FaArrowLeft className="me-2" /> Continue Shopping
            </Button>

            <h2 className="mb-4 d-flex align-items-center">
                <MdShoppingCart className="me-2 text-primary" />
                Your Sleepy Owl Cart
                <Badge bg="primary" className="ms-2">{cartData.length}</Badge>
            </h2>

            {cartData.length === 0 ? (
                <Card className="text-center p-5">
                    <h4 className="text-muted">Your cart is empty</h4>
                    <p>Discover our amazing coffee selections!</p>
                    <Button 
                        variant="primary" 
                        onClick={() => navigate('/home')}
                    >
                        Browse Products
                    </Button>
                </Card>
            ) : (
                <>
                    <Table hover responsive className="mb-4">
                        <thead className="table-light">
                            <tr>
                                <th>Product</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems}
                        </tbody>
                        <tfoot>
                            <tr className="table-active">
                                <td colSpan="5"></td>
                                <td className="fw-bold">Subtotal:</td>
                                <td className="fw-bold">₹{totalAmount.toFixed(2)}</td>
                                <td></td>
                            </tr>
                        </tfoot>
                    </Table>

                    <Row className="justify-content-end">
                        <Col md={4}>
                            <Card className="p-3 shadow-sm">
                                <h5 className="d-flex align-items-center">
                                    <MdPriceChange className="me-2 text-primary" />
                                    Order Summary
                                </h5>
                                <hr />
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Subtotal:</span>
                                    <span>₹{totalAmount.toFixed(2)}</span>
                                </div>
                                <div className="d-flex justify-content-between mb-3">
                                    <span>Shipping:</span>
                                    <span className="text-success">FREE</span>
                                </div>
                                <div className="d-flex justify-content-between fw-bold fs-5">
                                    <span>Total:</span>
                                    <span>₹{totalAmount.toFixed(2)}</span>
                                </div>
                                <Button 
                                    variant="primary" 
                                    size="lg" 
                                    className="w-100 mt-3"
                                    onClick={() => navigate('/checkout')}
                                >
                                    Proceed to Checkout
                                </Button>
                            </Card>
                        </Col>
                    </Row>
                </>
            )}
        </Container>
    );
};

export default CartData;