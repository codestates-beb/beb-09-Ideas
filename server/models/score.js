import mongoose from "mongoose";

/**
 * Score Collection Schema
 */
const scoreSchema = new mongoose.Schema({
  id: {
    // user._id or board._id 값이 들어감
    type: String,
    unique: true,
  },
  score_type: {
    // user와 board 구분
    // USER : user의 score 정보를 저장할때
    // BOARD : 게시판의 score 정보를 저장할때
    type: String,
  },
  management: {
    voting_power: Number,
    score: Number,
    management_theory: {
      score: Number,
    },
    human_resource: {
      score: Number,
    },
    marketing: {
      score: Number,
    },
    finance_accounting: {
      score: Number,
    },
  },
  economy: {
    voting_power: Number,
    score: Number,
    economy_theory: {
      score: Number,
    },
    market_structure: {
      score: Number,
    },
    equilibrium_theory: {
      score: Number,
    },
    externalities: {
      score: Number,
    },
  },
  security: {
    voting_power: Number,
    score: Number,
    security_theory: {
      score: Number,
    },
    vpn: {
      score: Number,
    },
    ids_ips: {
      score: Number,
    },
    rsa: {
      score: Number,
    },
    digital_signature: {
      score: Number,
    },
    cryptography: {
      score: Number,
    },
    ecdsa: {
      score: Number,
    },
  },
  ai: {
    voting_power: Number,
    score: Number,
    ai_theory: {
      score: Number,
    },
    autonomous_driving: {
      score: Number,
    },
    natural_language: {
      score: Number,
    },
    speech_recognition: {
      score: Number,
    },
    game_ai: {
      score: Number,
    },
    sentiment_analysis: {
      score: Number,
    },
    robotics_control: {
      score: Number,
    },
  },
  blockchain: {
    voting_power: Number,
    score: Number,
    blockchain_theory: {
      score: Number,
    },
    consensus_algorithm: {
      score: Number,
    },
    dao: {
      score: Number,
    },
    did: {
      score: Number,
    },
    smartcontract: {
      score: Number,
    },
    defi: {
      score: Number,
    },
  },
  cloud: {
    voting_power: Number,
    score: Number,
    cloud_theory: {
      score: Number,
    },
    scalability: {
      score: Number,
    },
    virtualization: {
      score: Number,
    },
    automation: {
      score: Number,
    },
    resilience: {
      score: Number,
    },
    resource_sharing: {
      score: Number,
    },
  },
});

const Score = mongoose.model("score", scoreSchema);
export default Score;
