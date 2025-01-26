const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
// const morgan = require("morgan");
// const helmet = require("helmet");
const connectDB = require("./config/db");
// const productRoutes = require("./routes/productRoutes");
// const userRoutes = require("./routes/userRoutes");
// const orderRoutes = require("./routes/orderRoutes");
// const paymentRoutes = require("./routes/paymentRoutes");

dotenv.config();
const app = express();

// Middleware
// app.use(helmet());
// app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
// app.use("/api/v1/products", productRoutes);
// app.use("/api/v1/users", userRoutes);
// app.use("/api/v1/orders", orderRoutes);
// app.use("/api/v1/payments", paymentRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

app.get("/", (req, res) => {
  res.send(`
    <div style="text-align: center; font-family: Arial, sans-serif;">
      <h1>🎉 Welcome to the Express Server Deployed on Vercel! 🚀✨</h1>
      <p style="font-size: 1.2rem;">We're live and ready to serve your requests! 😎🌟</p>
      <p>💻 Build amazing things, and deploy effortlessly! 💡</p>
      <p>🛠️ <a href="https://vercel.com" target="_blank" style="color: #0070f3; text-decoration: none;">Learn more about Vercel</a></p>
    </div>
  `);
});

app.get("/api/v1/products", (req, res) => {
  res.json([
    { id: 1, name: "Anchor", price: 1100.0 },
    { id: 2, name: "Milk", price: 250.0 },
    { id: 3, name: "Carrot", price: 450.0 },
  ]);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
