import mongoose from "mongoose";

const tokenAlgorithmSchema = new mongoose.Schema({
  company_user_ratio: {
    //회사 유저 토큰 분배 비율
    type: Number,
    default: 0.7,
  },
  post_comment_ratio: {
    //게시글과 댓글 토큰 분배 비율
    type: Number,
    default: 0.7,
  },
  category_reward_ratio: {
    // 카테고리 보상 분배 (비율 DAO로 결정)
    //합이 1이 되어야 함.
    management: {
      type: Number,
      default: 0.14,
    },
    economy: {
      type: Number,
      default: 0.14,
    },
    security: {
      type: Number,
      default: 0.15,
    },
    ai: {
      type: Number,
      default: 0.22,
    },
    blockchain: {
      type: Number,
      default: 0.18,
    },
    cloud: {
      type: Number,
      default: 0.17,
    },
  },
  user_score_coefficient: {
    // 유저 점수 계수
    type: Number,
    default: 2.8,
  },
  voting_power_coefficient: {
    // 보팅 파워 계수
    type: Number,
    default: 1.7,
  },
});

const TokenAlgorithm = mongoose.model("tokenAlgorithm", tokenAlgorithmSchema);
export default TokenAlgorithm;
