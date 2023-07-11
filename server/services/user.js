import fetch from "node-fetch";
import User from "../models/user.js";
import Score from "../models/score.js";
import TokenAlgorithm from "../models/tokenAlgorithm.js";

/**
 * 전체 사용자 수 조회
 * @returns 전체 사용자 수
 */
const getTotalUserCount = async () => {
  try {
    const userCount = await User.countDocuments();
    return userCount;
  } catch (err) {
    throw err;
  }
};

const calculateUserScore = async (boardId) => {
  // 사용자 점수 계수
  const userScoreCoefficient = await TokenAlgorithm.findOne(
    {},
    { user_score_coefficient: 1 }
  );
  console.log(userScoreCoefficient);
};

/**
 *
 * @returns 이더리움 가격 값
 */
const getEtherPeice = async () => {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
    );
    const data = await response.json();
    const ethereumPrice = data.ethereum.usd;
    console.log(`Current Ethereum Price: $${ethereumPrice}`);

    return ethereumPrice;
  } catch (err) {
    console.error("Error fetching Ethereum price:", error);
    throw err;
  }
};

const getUsersByTotalScore = async () => {
  try {
    const users = await User.aggregate([
      {
        $lookup: {
          from: "scores",
          localField: "score_id",
          foreignField: "_id",
          as: "score",
        },
      },
      {
        $unwind: "$score",
      },
      {
        $sort: {
          "score.total_score": -1,
        },
      },
    ]).exec();

    console.log(users);
  } catch (err) {
    throw err;
  }
};

export {
  getTotalUserCount,
  calculateUserScore,
  getEtherPeice,
  getUsersByTotalScore,
};
