const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("server connected ", connection.connection.host);
  } catch (error) {
    console.error("connectDb error: ", error);
    process.exit()
  }
};

module.exports = connectDB;
