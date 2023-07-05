import mongoose from "mongoose";

/**
 * Board Collection Schema
 */
const boardSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  category: {
    type: String,
  },
  content: {
    type: String,
  },
  thumb_up: {
    type: Number,
    default: 0,
  },
  thumb_down: {
    type: Number,
    default: 0,
  },
  thumb_users: {
    // 좋아요, 싫어요 중복 방지
    type: Map,
    of: Boolean,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  user_id: {
    // 작성자의 id
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  comments: {
    // 댓글 id
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment",
  },
  score: {
    // 게시판 점수 id
    type: mongoose.Schema.Types.ObjectId,
    ref: "Score",
  },
  view_count: {
    // 게시글 조회수
    type: Number,
    default: 0,
  },
  view_users: {
    // 게시글 조회수 중복 방지
    type: Map,
    of: Boolean,
    required: true,
  },
});

const Board = mongoose.model("board", boardSchema);
export default Board;
