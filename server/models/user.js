import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "./../config/index.js";

const accessString = config.bcryptConfig.accessToken;

const userSchema = new mongoose.Schema({
  id: {
    // 사용자 id
    type: String,
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
  role: {
    // 사용자 권한 설정
    // 0 : 일반 사용자, 0이 아닌 숫자 : 관리자
    type: Number,
    default: 0,
  },
  token: {
    // 로그인 관련 토큰 값 저장
    type: String,
  },
  tokenExp: {
    // 로그인 유효기간
    type: Number,
  },
  created_at: {
    // 사용자 생성 시간
    type: Date,
    default: Date.now,
  },
  profile: {
    // 사용자 이미지 정보
    image_url: String,
    title: String,
    description: String,
  },
  score_id: {
    // 사용자 점수
    // type: mongoose.Schema.Types.ObjectId,
    // ref: "Score",
    type: String,
  },
  isVoted: {
    type: Boolean,
    default: false,
  },
  followers: {
    type: Number,
    default: 0,
  },
});

/**
 *user 데이터 저장 전 비밀번호 암호화
 */
userSchema.pre("save", function (next) {
  let user = this;
  const rounds = Number(config.bcryptConfig.saltRounds);

  // 비밀번호 암호화
  if (user.isModified("password")) {
    bcrypt.genSalt(rounds, function (err, salt) {
      if (err) return next(err);

      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash; // 암호화된 값으로 비밀번호 변경
        next();
      });
    });
  } else {
    next();
  }
});
/**
 * 비밀번호 일치 여부 확인
 */
userSchema.methods.comparePassword = function (plainPassword) {
  let user = this;

  return new Promise((resolve, reject) => {
    bcrypt.compare(plainPassword, user.password, function (err, isMatch) {
      if (err) reject(err);

      resolve(isMatch);
    });
  });
};

/**
 * 로그인 토큰 생성
 */
userSchema.methods.generateToken = function () {
  let user = this;

  // json web token 생성
  const jsonToken = jwt.sign(user._id.toHexString(), accessString);
  user.token = jsonToken;
  return user.save();
};

/**
 * 로그아웃, 토큰 decode 후 삭제
 */
userSchema.statics.findByToken = function (token) {
  let user = this;

  return new Promise((resolve, reject) => {
    // 토큰 decode
    jwt.verify(token, accessString, function (err, decoded) {
      if (err) {
        reject(err);
        return;
      }

      user
        .findOne({ _id: decoded, token: token })
        .then((foundUser) => {
          resolve(foundUser);
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

const User = mongoose.model("user", userSchema);
export default User;
