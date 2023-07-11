import mongoose from "mongoose";

/**
 * Score Collection Schema
 */
const scoreSchema = new mongoose.Schema({
  total_scroe: {
    type: Number,
    default: 0,
  },
  management: {
    voting_power: {
      type: Number,
      default: 0,
    },
    score: {
      type: Number,
      default: 0,
    },
    management_theory: {
      score: {
        type: Number,
        default: 0,
      },
    },
    human_resource: {
      score: {
        type: Number,
        default: 0,
      },
    },
    marketing: {
      score: {
        type: Number,
        default: 0,
      },
    },
    finance_accounting: {
      score: {
        type: Number,
        default: 0,
      },
    },
  },
  economy: {
    voting_power: {
      type: Number,
      default: 0,
    },
    score: {
      type: Number,
      default: 0,
    },
    economy_theory: {
      score: {
        type: Number,
        default: 0,
      },
    },
    market_structure: {
      score: {
        type: Number,
        default: 0,
      },
    },
    equilibrium_theory: {
      score: {
        type: Number,
        default: 0,
      },
    },
    externalities: {
      score: {
        type: Number,
        default: 0,
      },
    },
  },
  security: {
    voting_power: {
      type: Number,
      default: 0,
    },
    score: {
      type: Number,
      default: 0,
    },
    security_theory: {
      score: {
        type: Number,
        default: 0,
      },
    },
    vpn: {
      score: {
        type: Number,
        default: 0,
      },
    },
    ids_ips: {
      score: {
        type: Number,
        default: 0,
      },
    },
    rsa: {
      score: {
        type: Number,
        default: 0,
      },
    },
    digital_signature: {
      score: {
        type: Number,
        default: 0,
      },
    },
    cryptography: {
      score: {
        type: Number,
        default: 0,
      },
    },
    ecdsa: {
      score: {
        type: Number,
        default: 0,
      },
    },
  },
  ai: {
    voting_power: {
      type: Number,
      default: 0,
    },
    score: {
      type: Number,
      default: 0,
    },
    ai_theory: {
      score: {
        type: Number,
        default: 0,
      },
    },
    autonomous_driving: {
      score: {
        type: Number,
        default: 0,
      },
    },
    natural_language: {
      score: {
        type: Number,
        default: 0,
      },
    },
    speech_recognition: {
      score: {
        type: Number,
        default: 0,
      },
    },
    game_ai: {
      score: {
        type: Number,
        default: 0,
      },
    },
    sentiment_analysis: {
      score: {
        type: Number,
        default: 0,
      },
    },
    robotics_control: {
      score: {
        type: Number,
        default: 0,
      },
    },
  },
  blockchain: {
    voting_power: {
      type: Number,
      default: 0,
    },
    score: {
      type: Number,
      default: 0,
    },
    blockchain_theory: {
      score: {
        type: Number,
        default: 0,
      },
    },
    consensus_algorithm: {
      score: {
        type: Number,
        default: 0,
      },
    },
    dao: {
      score: {
        type: Number,
        default: 0,
      },
    },
    did: {
      score: {
        type: Number,
        default: 0,
      },
    },
    smartcontract: {
      score: {
        type: Number,
        default: 0,
      },
    },
    defi: {
      score: {
        type: Number,
        default: 0,
      },
    },
  },
  cloud: {
    voting_power: {
      type: Number,
      default: 0,
    },
    score: {
      type: Number,
      default: 0,
    },
    cloud_theory: {
      score: {
        type: Number,
        default: 0,
      },
    },
    scalability: {
      score: {
        type: Number,
        default: 0,
      },
    },
    virtualization: {
      score: {
        type: Number,
        default: 0,
      },
    },
    automation: {
      score: {
        type: Number,
        default: 0,
      },
    },
    resilience: {
      score: {
        type: Number,
        default: 0,
      },
    },
    resource_sharing: {
      score: {
        type: Number,
        default: 0,
      },
    },
  },
});

/**
 * 데이터 저장전에 totalScore 계산
 */
scoreSchema.pre("save", function (next) {
  let scoreData = this;

  let totalScore =
    scoreData.management.score +
    scoreData.economy.score +
    scoreData.security.score +
    scoreData.ai.score +
    scoreData.blockchain +
    scoreData.cloud;

  scoreData.total_scroe = totalScore;
  next();
});

const Score = mongoose.model("score", scoreSchema);
export default Score;
