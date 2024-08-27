import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
  partyName: {
    type: String,
  },
  panNo: {
    type: Number,
  },
  phoneNumber: {
    type: String,
  },
  products: {
    type: String,
  },
});
