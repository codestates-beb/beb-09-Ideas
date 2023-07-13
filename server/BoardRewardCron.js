import cron from "node-cron";
import {BoardReward} from "./services/BoardReward.js";

const schedule = "0 0 0 1 1 *"; // 매년 1월 1일 0시 0분 반복
//const schedule = "* * * * *";  // 1분마다 실행되는 cron 작업 (테스트용)

const job = cron.schedule(schedule, async () => {
  try {
    // 모든 사용자의 isCommentVoted 필드를 false로 업데이트
    await BoardReward();

    console.log(
      "Successfully updated the 'isCommentVote' and 'isCommentRewarded' fields"
    );
  } catch (error) {
    console.error(
      "There was an error updating the 'isCommentVoted' and 'isCommentRewarded' fields.",
      error
    );
  }
});

export default job;
