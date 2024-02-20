// db.js

import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';
let pool = null;

// const mongoURI = "mongodb://localhost:27017/User";
const mongoURI = "mongodb://localhost:27017/User"

const options = {
  maxPoolSize: 50,
};

const createPool = async () => {
  if (!pool) {
    try {
      pool = await MongoClient.connect(mongoURI, options);
      console.log('MongoDB connection pool created');
      const db = pool.db(); // Get the database object from the client
      // Pass the URI to mongoose.connect()
      await mongoose.connect(mongoURI);
      console.log('Mongoose connection pool created');

    } catch (error) {
      console.error('Error creating MongoDB connection pool:', error);
    }
  }
}

const closePool = async () => {
  if (pool) {
    await pool.close();
    console.log('MongoDB connection pool closed');
    pool = null;
  }
}

const getConnection = () => {
  if (!pool) {
    throw new Error('MongoDB connection pool not initialized');
  }
  return pool;
}

export default { createPool, closePool, getConnection };
