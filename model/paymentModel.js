import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  bookingId: { type: mongoose.Schema.Types.ObjectId, ref: "Booking", required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  amount: Number,
  method: { type: String, enum: ["card", "bank_transfer", "cash"], default: "card" },
  status: { type: String, enum: ["pending", "successful", "failed"], default: "pending" },
  transactionRef: String,
}, { timestamps: true });


// module.exports = mongoose.model('Payment',paymentSchema );
const Payment = mongoose.model('Payment', paymentSchema);
export default Payment;