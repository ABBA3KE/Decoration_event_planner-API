import mongoose from "mongoose";

const packageSchema = new mongoose.Schema({
  serviceId: { type: mongoose.Schema.Types.ObjectId, ref: "Service", required: true },
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  features: [String],
  images: [String],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, { timestamps: true });

// module.exports = mongoose.model('Package',packageSchema );
const Package = mongoose.model('Package', packageSchema);
export default Package;