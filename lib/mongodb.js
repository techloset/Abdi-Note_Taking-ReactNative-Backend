import mongoose from "mongoose";

const connectMongoDB = async () => {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  } else {
    try {
      await mongoose.connect(process.env.MONGO_URI);
      console.log("Connected to MongoDB.");
    } catch (error) {
      console.log(error);
    }
  }
};

export default connectMongoDB;
