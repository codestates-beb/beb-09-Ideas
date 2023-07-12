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
    const userCount = await User.countDocuments({ role: 0 });
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
    console.log(err);
    throw err;
  }
};
// const getUsersByTotalScore = async () => {
//   try {
//     const users = await User.aggregate([
//       { $addFields: { scoreId: { $toObjectId: User.score_id } } },
//       {
//         $lookup: {
//           from: "scores", // 컬렉션 이름을 문자열로 지정
//           localField: "scoreId",
//           foreignField: "_id",
//           as: "score",
//         },
//       },
//       {
//         $unwind: "$score",
//       },
//       {
//         $sort: {
//           "score.total_score": -1,
//         },
//       },
//     ]).exec();

//     console.log(users);
//   } catch (err) {
//     throw err;
//   }
// };

/**
 * 토큰 정보, 이더리움 가격, 전체 사용자 수 조회
 * @returns {토큰 정보, 이더리움 가격, 전체 사용자 수}
 */
const getTokenInfo = async () => {
  try {
    // mft 토큰 가격, 유저 능력치 계수, 보팅파워 계수 조회
    // const tokenInfo = ;
    const { mft_price, user_score_coefficient, voting_power_coefficient } =
      await TokenAlgorithm.findOne();
    console.log(mft_price);

    // 이더리움 가격 조회
    const etherPrice = await getEtherPeice();

    // 전체 사용자 수
    const totalUserCount = await getTotalUserCount();

    return {
      mft_price,
      user_score_coefficient,
      voting_power_coefficient,
      etherPrice,
      totalUserCount,
    };
  } catch (err) {
    throw err;
  }
};

export { getTotalUserCount, calculateUserScore, getEtherPeice, getTokenInfo };
