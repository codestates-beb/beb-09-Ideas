import fetch from "node-fetch";
import User from "../models/user.js";
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

export { getTotalUserCount, calculateUserScore, getEtherPeice };
