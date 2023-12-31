import User from "../models/user.js";

// 로그아웃 인증 처리
let logoutAuth = (req, res, next) => {
  let token = req.cookies.x_auth; // 클라이언트에서 쿠키를 받아옴

  // 토큰 복호화 후 유저 검색
  User.findByToken(token)
    .then((user) => {
      if (!user) return res.json({ isAuth: false, error: true });

      req.token = token;
      req.user = user;
      next();
    })
    .catch((err) => {
      throw err;
    });
};

export default logoutAuth;
