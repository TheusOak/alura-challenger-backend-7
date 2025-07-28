import mongoose from "mongoose";

async function connectToDatabase() {
  mongoose.connect(process.env.STRING_CONNECTION);
  return mongoose.connection;
}

export default connectToDatabase;
