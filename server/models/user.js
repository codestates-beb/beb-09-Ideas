import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "./../config/index.js";

/**
 * User Collection Schema
 */
const userSchema = new mongoose.Schema({
  id: {
    // 사용자 아이디
    type: String,
    unique: true,
  },
  email: {
    // 사용자 이메일
    type: String,
  },
  user_name: {
    // 사용자 이름
    type: String,
  },
  password: {
    // 사용자 비밀번호
    type: String,
  },
  phone_number: {
    // 사용자 핸드폰 번호
    type: String,
  },
  // 사용자 권한 설정
  // 0 : 일반 사용자, 0이 아닌 숫자 : 관리자
  role: {
    type: Number,
    default: 0,
  },
  token: {
    // 로그인 관련 토큰 값 저장
    type: String,
  },
  tokenExp: {
    // 로그인 가능 기간
    type: Number,
  },
  wallet_address: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now,
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
