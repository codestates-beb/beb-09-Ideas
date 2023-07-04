import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  userId: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  userName: {
    type: String,
  },
  phoneNum: {
    type: String,
    unique: true,
  },
  role: {
    type: Number,
    default: 0,
  },
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

const User = mongoose.model("User", UserSchema);
export default User;
