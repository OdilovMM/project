const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const connectDB = require("./config/db.js");
const productRoutes = require("./routes/productRoutes.js");
connectDB();
const port = process.env.PORT || 5000;




app.use(cors());
app.get("/", (req, res) => {
  res.send("API is running...");
});
app.use("/api/products", productRoutes);













app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
