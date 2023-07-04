import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "./../config/index.js";

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    unique: true,
  },
  userPw: {
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

/**
 * user 데이터 저장 전에 비밀번호 암호화
 */
userSchema.pre("save", function (next) {
  let user = this;
  const rounds = Number(config.bcryptConfig.saltRounds);

  // 비밀번호 암호화
  if (user.isModified("userPw")) {
    bcrypt.genSalt(rounds, function (err, salt) {
      if (err) return console.log(err); //next(err);

      bcrypt.hash(user.userPw, salt, function (err, hash) {
        if (err) return next(err);
        user.userPw = hash; // 암호화된 값으로 비밀번호 변경
        next();
      });
    });
  } else {
    next();
  }
});

const User = mongoose.model("User", userSchema);
export default User;
