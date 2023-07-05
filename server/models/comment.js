import mongoose from "mongoose";

/**
 * Comment Collection Schema
 */
const commentSchema = new mongoose.Schema({
  user_id: {
    // 작성자의 id
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  content: {
    // 댓글 내용
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
});

const Comment = mongoose.model("comment", commentSchema);
export default Comment;
