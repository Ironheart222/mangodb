// const mongoose = require('mongoose');
import mongoose from "mongoose";

const accountSchema = new mongoose.Schema({
  name: String,
  phone: String,
  country: String,
  currency: String
});

const account = mongoose.model('accounts', accountSchema);

export default account;