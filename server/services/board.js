import Comment from "../models/comment.js";
import User from "../models/user.js";
import Score from "../models/score.js";
import CalcTime from "./calcTime.js";

/**
 * 댓글 데이터 조회
 * @param {*} comments 댓글 리스트
 * @returns 댓글 데이터 리스트
 */
const getCommentData = async (comments) => {
  const commentsWithUserData = await Promise.all(
    comments.map(async (comment) => {
      const commentUserData = await User.findById(comment.user_id);
      console.log(commentUserData);
      return {
        id: comment._id,
        user: {
          id: commentUserData._id,
          user_name: commentUserData.user_name,
          profile: {
            image_url: commentUserData.profile.image_url,
          },
        },
        content: comment.content,
        thumb_up: comment.thumb_up,
        thumb_down: comment.thumb_down,
        created_at: CalcTime(comment.created_at),
      };
    })
  );

  return commentsWithUserData;
};

/**
 * 게시글 관련 데이터들 조회
 * @param {*} boards 게시글 리스트
 * @returns 게시글 데이터 리스트
 */
const getBoardData = async (boards) => {
  try {
    // 게시판 관련 데이터 조회
    const dataArray = [];
    for (const board of boards) {
      // 사용자 정보 조회
      const userData = await User.findById(board.user_id);

      // 게시판 점수 조회
      const boardScore = await Score.findById(board.score_id);

      // 게시글별 댓글 조회
      const comments = await Comment.find({ board_id: board._id }).sort({
        created_at: -1,
      });
      const commentsWithUserData = await getCommentData(comments);

      // 전송 데이터 생성
      const data = {
        id: board._id,
        created_at: CalcTime(board.created_at),
        author: {
          id: userData._id,
          user_name: userData.user_name,
          profile: {
            image_url: userData.profile.image_url,
          },
        },
        title: board.title,
        category: board.category,
        content: board.content,
        thumb_up: board.thumb_up,
        thumb_down: board.thumb_down,
        view_count: board.view_count,
        score: boardScore,
        comments: commentsWithUserData,
      };

      dataArray.push(data);
    }

    return dataArray;
  } catch (err) {
    throw err;
  }
};

/**
 * 게시글 상세 정보 조회
 * @param {*} board 게시글 정보
 * @param {*} userId 게시글을 보고 있는 사용자의 id
 * @returns 게시글 상세 데이터
 */
const getBoardDetailData = async (board, userId) => {
  try {
    // 조회수 : 이미 조회한 유저인지 확인
    if (!board.view_users || !board.view_users.get(userId)) {
      if (!board.view_users) {
        board.view_users = new Map(); // view_users 초기화
      }
      board.view_users.set(userId, true); // 유저 추가
      board.view_count += 1; // 조회수 증가
      await board.save();
    }

    // 게시글을 작성한 사용자의 정보 조회
    const userData = await User.findById(board.user_id);

    // 게시글의 점수 정보 조회
    const boardScore = await Score.findById(board.score_id);

    // 게시글에 작성된 댓글 정보 조회
    const comments = await Comment.find({ board_id: board._id }).sort({
      created_at: -1,
    });
    const commentsWithUserData = await getCommentData(comments);

    // 게시글을 보고 있는 사용자 정보 조회 (해당 게시글에 좋아요/싫어요 클릭 여부 확인)
    const thumbValue = board.thumb_users.get(userId);

    // 전송 데이터 생성
    const data = {
      id: board._id,
      created_at: CalcTime(board.created_at),
      author: {
        id: userData._id,
        user_name: userData.user_name,
        profile: {
          image_url: userData.profile.image_url,
        },
      },
      title: board.title,
      content: board.content,
      thumb_up: board.thumb_up,
      thumb_down: board.thumb_down,
      thumb_users: {
        viewerThumbValue: thumbValue,
      },
      view_count: board.view_count,
      board_score: boardScore,
      comments: commentsWithUserData,
    };

    return data;
  } catch (err) {
    throw err;
  }
};

export { getBoardData, getBoardDetailData, getCommentData };
