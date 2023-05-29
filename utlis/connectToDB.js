import mongoose from "mongoose";

const connectDB = () => {
  let connected = false;

  if (connected) {
    return;
  }
  mongoose.connect(
    process.env.MONGODB_URL,
    {
      userCreateIndex: true,
      userFindAndModify: false,
      userNewUrlparser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) throw err;
    }
  );
};

export default connectDB;
