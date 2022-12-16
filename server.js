const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorMiddleware");

connectDB();

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/admin/users", require("./routes/userRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/category", require("./routes/categoryRoutes"));

app.use(errorHandler);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server started`.green);
});
