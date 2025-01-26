// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("MongoDB connected successfully!..");
//   } catch (err) {
//     console.error(err.message);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not defined in the environment variables!");
    }

    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully!");
    console.log("Mongo URI:", process.env.MONGO_URI);
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
