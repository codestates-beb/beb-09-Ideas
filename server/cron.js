import cron from "node-cron";
import User from "./models/user.js";

const schedule = "0 0 0 * * *"; // 오전 12시에 실행되는 cron 작업
//const schedule = "* * * * *";  // 1분마다 실행되는 cron 작업 (테스트용)

const job = cron.schedule(schedule, async () => {
  try {
    // 모든 사용자의 isCommentVoted 필드를 false로 업데이트
    await User.updateMany(
      {},
      { $set: { isCommentVoted: false, isCommentRewarded: false } }
    );

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
