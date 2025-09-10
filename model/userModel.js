import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  phone: String,
  role: { type: String, enum: ["client", "decorator", "admin"], default: "client" },
}, { timestamps: true });

// module.exports = mongoose.model('UserModel',userModelSchema );
const User = mongoose.model('User', userSchema);
export default User;