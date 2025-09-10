import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  category: String,
  images: [String],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, { timestamps: true });

// module.exports = mongoose.model('Service',serviceSchema );
const Service = mongoose.model('Service', serviceSchema);
export default Service;