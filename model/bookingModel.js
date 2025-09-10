import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  serviceId: { type: mongoose.Schema.Types.ObjectId, ref: "Service" },
  packageId: { type: mongoose.Schema.Types.ObjectId, ref: "Package" },
  eventDate: Date,
  venue: String,
  status: { type: String, enum: ["pending", "confirmed", "completed", "cancelled"], default: "pending" },
  totalPrice: Number,
}, { timestamps: true });

// module.exports = mongoose.model('booking', bookingSchema);
const booking = mongoose.model('booking', bookingSchema);
export default Booking;