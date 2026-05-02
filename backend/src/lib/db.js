import mongoose from "mongoose";

const localMongoUri = "mongodb://127.0.0.1:27017/chat_app";

export const connectDB = async () => {
    const uri = process.env.MONGODB_URI || localMongoUri;

    try {
        const conn = await mongoose.connect(uri);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error("MongoDB connection error:", error.message || error);
        process.exit(1);
    }
};