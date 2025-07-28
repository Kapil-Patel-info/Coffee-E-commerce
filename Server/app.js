const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();


const paymentRoute = require("./routes/payment");
const AdminRoute = require("./routes/adminRoute");
const ProductRoute = require("./routes/productRoute");
const UserRoute = require("./routes/userRoute");

const Port = process.env.PORT || 8080;

mongoose.connect(process.env.DBCON).then(() => {
  console.log("DB Connected Successfully!");
}).catch(err => {
  console.error("DB connection error:", err);
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());

app.use("/admin", AdminRoute);
app.use("/product", ProductRoute);
app.use("/user", UserRoute);
app.use("/api/payment", paymentRoute);




app.listen(Port, () => {
  console.log(`Server running on port ${Port}`);
});
