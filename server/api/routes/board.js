import { Router } from "express";
import Board from "../../models/board.js";
import Comment from "../../models/comment.js";
import Score from "../../models/score.js";
import Auth from "../../services/auth.js";
import User from "../../models/user.js";
import {
  getBoardData,
  getBoardDetailData,
  getCommentData,
} from "../../services/board.js";
import Logger from "../../loaders/logger.js";
import user from "./user.js";

const route = Router();

export default (app) => {
  app.use("/board", route);

  /**
   * @swagger
   * tags:
   *   name: Board
   * /board/list:
   *   get:
   *     summary: 전체 게시글 리스트 조회
   *     tags: [Board]
   *     responses:
   *       '200':
   *         description: 전체 게시글 조회 성공 (배열로 반환됨)
   *         content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                success:
   *                  type: boolean
   *                  example: true
   *                data:
   *                  type: array
   *                  items:
   *                    $ref: '#/components/schemas/Board_List'
   *       '500':
   *         description: 서버 에러
   *         content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                success:
   *                  type: boolean
   *                  example: false
   *                err:
   *                  type: object
   */
  route.get("/list", async (req, res) => {
    try {
      // 게시판 리스트 조회
      const boards = await Board.find().sort({ created_at: -1 }).exec();

      // 게시판 데이터가 없을 경우
      if (boards.length === 0) {
        return res
          .status(404)
          .json({ success: false, message: "조회된 데이터가 없습니다." });
      }

      // 게시글 관련 데이터 조회
      const dataArray = await getBoardData(boards);
      return res.status(200).json({ success: true, data: dataArray });
    } catch (err) {
      Logger.error(err);
      return res.status(500).json({ success: false, err });
    }
  });

  /**
   * @swagger
   * tags:
   *   name: Board
   * /board/list/{category}:
   *   get:
   *     summary: 카데고리별 게시글 리스트 조회
   *     tags: [Board]
   *     parameters:
   *       - in: path
   *         name: category
   *         required: true
   *         description: 조회할 게시글의 카테고리명
   *         schema:
   *           type: string
   *     responses:
   *       '200':
   *         description: 카테고리별 게시글 조회 성공 (배열로 반환됨)
   *         content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                success:
   *                  type: boolean
   *                  example: true
   *                data:
   *                  type: array
   *                  items:
   *                    $ref: '#/components/schemas/Board_List'
   *       '404':
   *         description: 조회되는 데이터가 없음
   *         content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                success:
   *                  type: boolean
   *                  example: false
   *                message:
   *                  type: string
   *       '500':
   *         description: 서버 에러
   *         content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                success:
   *                  type: boolean
   *                  example: false
   *                err:
   *                  type: object
   */

  /**
   * @swagger
   * components:
   *   schemas:
   *     Board_List:
   *       type: object
   *       properties:
   *         id:
   *           type: string
   *           description: 게시글 ID
   *         created_at:
   *           type: string
   *           description: 게시글 생성된 시간
   *         author:
   *           type: object
   *           properties:
   *             id:
   *               type: string
   *               description: 작성자 ID
   *             user_name:
   *               type: string
   *               description: 작성자 이름
   *             profile:
   *               type: object
   *               properties:
   *                 image_url:
   *                   type: string
   *                   description: 작성자 프로필 이미지 URL
   *         title:
   *           type: string
   *           description: 게시글 제목
   *         category:
   *           type: string
   *           description: 게시글 카테고리명
   *         content:
   *           type: number
   *           description: 게시글 내용
   *         thumb_up:
   *           type: number
   *           description: 좋아요 수
   *         thumb_down:
   *           type: number
   *           description: 싫어요 수
   *         view_count:
   *           type: number
   *           description: 조회수
   *         score:
   *           type: object
   *           properties:
   *             management:
   *               type: object
   *               properties:
   *                 management_theory:
   *                   type: object
   *                   properties:
   *                     score:
   *                       type: number
   *                       description: 경영 이론 점수
   *                 human_resource:
   *                   type: object
   *                   properties:
   *                     score:
   *                       type: number
   *                       description: 인사 관리 점수
   *                 marketing:
   *                   type: object
   *                   properties:
   *                     score:
   *                       type: number
   *                       description: 마케팅 점수
   *                 finance_accounting:
   *                   type: object
   *                   properties:
   *                     score:
   *                       type: number
   *                       description: 재무/회계 점수
   *                 voting_power:
   *                   type: number
   *                   description: 투표 권한
   *                 score:
   *                   type: number
   *                   description: 총 점수
   *             economy:
   *               type: object
   *               properties:
   *                 economy_theory:
   *                   type: object
   *                   properties:
   *                     score:
   *                       type: number
   *                       description: 경제 이론 점수
   *                 market_structure:
   *                   type: object
   *                   properties:
   *                     score:
   *                       type: number
   *                       description: 시장 구조 점수
   *                 equilibrium_theory:
   *                   type: object
   *                   properties:
   *                     score:
   *                       type: number
   *                       description: 평형 이론 점수
   *                 externalities:
   *                   type: object
   *                   properties:
   *                     score:
   *                       type: number
   *                       description: 외부성 점수
   *                 voting_power:
   *                   type: number
   *                   description: 투표 권한
   *                 score:
   *                   type: number
   *                   description: 총 점수
   *             security:
   *               type: object
   *               properties:
   *                 security_theory:
   *                   type: object
   *                   properties:
   *                     score:
   *                       type: number
   *                       description: 보안 이론 점수
   *                 vpn:
   *                   type: object
   *                   properties:
   *                     score:
   *                       type: number
   *                       description: VPN 점수
   *                 ids_ips:
   *                   type: object
   *                   properties:
   *                     score:
   *                       type: number
   *                       description: IDS/IPS 점수
   *                 rsa:
   *                   type: object
   *                   properties:
   *                     score:
   *                       type: number
   *                       description: RSA 점수
   *                 digital_signature:
   *                   type: object
   *                   properties:
   *                     score:
   *                       type: number
   *                       description: 디지털 서명 점수
   *         comments:
   *           type: object
   *           properties:
   *             id:
   *               type: string
   *               description: 댓글 아이디
   *             user:
   *               type: object
   *               properties:
   *                 id:
   *                   type: string
   *                   description: 사용자 아이디
   *                 user_name:
   *                   type: string
   *                   description: 사용자 이름
   *                 profile:
   *                   type: object
   *                   properties:
   *                     image_url:
   *                       type: string
   *                       description: 이미지 url
   *             content:
   *               type: string
   *               description: 댓글 내용
   *             thumb_up:
   *               type: number
   *               description: 댓글 좋아요 갯수
   *             thumb_down:
   *               type: number
   *               description: 댓글 싫어요 갯수
   *             created_at:
   *               type: string
   *               description: 댓글 생성일
   */
  route.get("/list/:category", async (req, res) => {
    // management, economy, security, ai, blockchain, cloud,

    const category = req.params.category;

    try {
      // 게시판 리스트 조회
      const boards = await Board.find({ category: category })
        .sort({ created_at: -1 })
        .exec();

      // 게시판 데이터가 없을 경우
      if (boards.length === 0) {
        return res
          .status(404)
          .json({ success: false, message: "조회된 데이터가 없습니다." });
      }

      // 게시글 관련 데이터 조회
      const dataArray = await getBoardData(boards);
      return res.status(200).json({ success: true, data: dataArray });
    } catch (err) {
      Logger.error(err);
      return res.status(500).json({ success: false, err });
    }
  });

  /**
   * @swagger
   * tags:
   *   name: Board
   * /board/detail/{id}:
   *   get:
   *     summary: 게시글 상세 조회
   *     tags: [Board]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: 조회할 게시글의 ID
   *         schema:
   *           type: string
   *     responses:
   *       '200':
   *         description: 게시글 조회 성공
   *         content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                success:
   *                  type: boolean
   *                  example: true
   *                data:
   *                  $ref: '#/components/schemas/Board'
   *       '404':
   *         description: 게시글을 찾을 수 없음
   *         content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                success:
   *                  type: boolean
   *                  example: false
   *                message:
   *                  type: string
   *       '500':
   *         description: 서버 에러
   *         content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                success:
   *                  type: boolean
   *                  example: false
   *                err:
   *                  type: object
   */

  /**
   * @swagger
   * components:
   *   schemas:
   *     Board:
   *       type: object
   *       properties:
   *         id:
   *           type: string
   *           description: 게시글 ID
   *         created_at:
   *           type: string
   *           description: 게시글 생성 시간
   *         author:
   *           type: object
   *           properties:
   *             id:
   *               type: string
   *               description: 작성자 ID
   *             user_name:
   *               type: string
   *               description: 작성자 이름
   *             profile:
   *               type: object
   *               properties:
   *                 image_url:
   *                   type: string
   *                   description: 작성자 프로필 이미지 URL
   *         title:
   *           type: string
   *           description: 게시글 제목
   *         content:
   *           type: string
   *           description: 게시글 내용
   *         thumb_up:
   *           type: number
   *           description: 좋아요 수
   *         thumb_down:
   *           type: number
   *           description: 싫어요 수
   *         thumb_users:
   *           type: object
   *           properties:
   *            viewerThumbValue :
   *              type: string
   *              description: 현재 게시글을 보고 있는 사용자의 좋아요/싫어요 여부
   *         view_count:
   *           type: number
   *           description: 조회수
   *         board_score:
   *           type: object
   *           properties:
   *             management:
   *               type: object
   *               properties:
   *                 management_theory:
   *                   type: object
   *                   properties:
   *                     score:
   *                       type: number
   *                       description: 경영 이론 점수
   *                 human_resource:
   *                   type: object
   *                   properties:
   *                     score:
   *                       type: number
   *                       description: 인사 관리 점수
   *                 marketing:
   *                   type: object
   *                   properties:
   *                     score:
   *                       type: number
   *                       description: 마케팅 점수
   *                 finance_accounting:
   *                   type: object
   *                   properties:
   *                     score:
   *                       type: number
   *                       description: 재무/회계 점수
   *                 voting_power:
   *                   type: number
   *                   description: 투표 권한
   *                 score:
   *                   type: number
   *                   description: 총 점수
   *             economy:
   *               type: object
   *               properties:
   *                 economy_theory:
   *                   type: object
   *                   properties:
   *                     score:
   *                       type: number
   *                       description: 경제 이론 점수
   *                 market_structure:
   *                   type: object
   *                   properties:
   *                     score:
   *                       type: number
   *                       description: 시장 구조 점수
   *                 equilibrium_theory:
   *                   type: object
   *                   properties:
   *                     score:
   *                       type: number
   *                       description: 평형 이론 점수
   *                 externalities:
   *                   type: object
   *                   properties:
   *                     score:
   *                       type: number
   *                       description: 외부성 점수
   *                 voting_power:
   *                   type: number
   *                   description: 투표 권한
   *                 score:
   *                   type: number
   *                   description: 총 점수
   *             security:
   *               type: object
   *               properties:
   *                 security_theory:
   *                   type: object
   *                   properties:
   *                     score:
   *                       type: number
   *                       description: 보안 이론 점수
   *                 vpn:
   *                   type: object
   *                   properties:
   *                     score:
   *                       type: number
   *                       description: VPN 점수
   *                 ids_ips:
   *                   type: object
   *                   properties:
   *                     score:
   *                       type: number
   *                       description: IDS/IPS 점수
   *                 rsa:
   *                   type: object
   *                   properties:
   *                     score:
   *                       type: number
   *                       description: RSA 점수
   *                 digital_signature:
   *                   type: object
   *                   properties:
   *                     score:
   *                       type: number
   *                       description: 디지털 서명 점수
   *         comments:
   *           type: object
   *           properties:
   *             id:
   *               type: string
   *               description: 댓글 아이디
   *             user:
   *               type: object
   *               properties:
   *                 id:
   *                   type: string
   *                   description: 사용자 아이디
   *                 user_name:
   *                   type: string
   *                   description: 사용자 이름
   *                 profile:
   *                   type: object
   *                   properties:
   *                     image_url:
   *                       type: string
   *                       description: 이미지 url
   *             content:
   *               type: string
   *               description: 댓글 내용
   *             thumb_up:
   *               type: number
   *               description: 댓글 좋아요 갯수
   *             thumb_down:
   *               type: number
   *               description: 댓글 싫어요 갯수
   *             created_at:
   *               type: string
   *               description: 댓글 생성일
   */
  route.get("/detail/:id", Auth, async (req, res) => {
    const userId = req.user._id; // 해당 게시글을 보고 있는 사용자id
    const boardId = req.params.id; // 상세 조회할 게시글 id

    try {
      // 게시글 조회
      const board = await Board.findById(boardId);

      if (!board) {
        return res
          .status(404)
          .json({ success: false, message: "게시글을 찾을 수 없습니다." });
      }

      // 게시글 관련 데이터 조회
      const data = await getBoardDetailData(board, userId);
      return res.status(200).json({ success: true, data: data });
    } catch (err) {
      Logger.error(err);
      res.status(500).json({ success: false, err });
    }
  });

  /**
   * @swagger
   * tags:
   *   name: Board
   * /board/create:
   *   post:
   *     summary: 게시글 작성
   *     tags: [Board]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: "#/components/schemas/Board_Create"
   *     responses:
   *       '200':
   *         description: 게시글 작성 성공
   *         content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                success:
   *                  type: boolean
   *                  example: true
   *       default:
   *         description: 게시글 작성 실패
   *         content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                success:
   *                  type: boolean
   *                  example: false
   *                error:
   *                  type: object
   */

  /**
   * @swagger
   * components:
   *   schemas:
   *     Board_Create:
   *       type: object
   *       properties:
   *         title:
   *           type: string
   *           description: 게시글 제목
   *         category:
   *           type: string
   *           description: 게시글 카테고리
   *         content:
   *           type: string
   *           description: 게시글 내용
   */
  route.post("/create", Auth, async (req, res) => {
    const board = new Board(req.body);
    const score = new Score();

    try {
      // 게시판 점수 생성
      const scoreData = await score.save();
      board.score_id = scoreData._id;

      // 게시글 저장
      await board.save();
      return res.status(200).json({ success: true });
    } catch (err) {
      Logger.error(err);
      return res.json({ success: false, err });
    }
  });

  /**
   * @swagger
   * tags:
   *   name: Board
   * /board/comment:
   *   post:
   *     summary: 댓글 작성
   *     tags: [Board]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: "#/components/schemas/Board_Comment"
   *     responses:
   *       '200':
   *         description: 댓글 작성 성공
   *         content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                success:
   *                  type: boolean
   *                  example: true
   *       default:
   *         description: 댓글 작성 실패
   *         content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                success:
   *                  type: boolean
   *                  example: false
   *                error:
   *                  type: object
   */

  /**
   * @swagger
   * components:
   *   schemas:
   *     Board_Comment:
   *       type: object
   *       properties:
   *         content:
   *           type: string
   *           description: 댓글 내용
   *         board_id:
   *           type: string
   *           description: 게시글 아이디
   */
  route.post("/comment", Auth, async (req, res) => {
    // req.body.user_id = req.user._id; // 댓글 작성자 id 입력
    const comment = new Comment(req.body);
    const commentsWithUserData = await getCommentData([comment]);

    try {
      // 댓글 저장
      await comment
        .save()
        .then(async (data) => {
          // isCommentRewarded true로 변경
          const userData = await User.findById(commentsWithUserData.user.id);
          userData.isCommentRewarded = true;
          userData.save();
        })
        .catch((err) => {
          Logger.error(err);
        });
      return res
        .status(200)
        .json({ success: true, data: commentsWithUserData[0] });
    } catch (err) {
      Logger.error(err);
      return res.json({ success: false, err });
    }
  });

  /**
   * @swagger
   * tags:
   *   name: Board
   * /board/thumb:
   *   put:
   *     summary: 게시글 싫어요, 좋아요 기능 [up, down, cancelUp, cancelDown]
   *     tags: [Board]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *              boardId:
   *                type: string
   *                description: 게시글 ID
   *              thumbValue:
   *                type: string
   *                enum: [up, down, cancelUp, cancelDown]
   *                description: 좋아요(up) 또는 싫어요(down) 값
   *     responses:
   *       '200':
   *         description:  성공
   *         content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                success:
   *                  type: boolean
   *                  example: true
   *       default:
   *         description: 실패
   *         content:
   *          application/json:
   *            schema:
   *              type: object
   *              properties:
   *                success:
   *                  type: boolean
   *                  example: false
   *                error:
   *                  type: object
   */
  route.put("/thumb", Auth, async (req, res) => {
    // thumbValue => up or down / cancelUp or cancelDown

    const userId = req.user._id;
    // console.log(userId);
    const { boardId, thumbValue } = req.body;

    try {
      const boardData = await Board.findById(boardId);
      // console.log(boardData);

      if (thumbValue.includes("cancel") && boardData.thumb_users.get(userId)) {
        // 좋아요/싫어요 누른 사용자 삭제
        boardData.thumb_users.delete(userId);

        if (thumbValue === "cancelUp") {
          boardData.thumb_up -= 1; // 좋아요 수 감소
        } else if (thumbValue === "cancelDown") {
          boardData.thumb_down -= 1; // 싫어요 수 감소
        }
      } else if (!boardData.thumb_users.get(userId)) {
        // 좋아요/싫어요 누른 사용자 추가
        boardData.thumb_users.set(userId, thumbValue);

        if (thumbValue === "up") {
          boardData.thumb_up += 1; // 좋아요 수 증가
        } else if (thumbValue === "down") {
          boardData.thumb_down += 1; // 싫어요 수 증가
        }
      }
      // 저장
      await boardData.save();

      return res.status(200).json({ success: true });
    } catch (err) {
      Logger.error(err);
      return res.json({ success: false, err });
    }
  });

  /**
   * @swagger
   * /boardScoreSave:
   *   post:
   *     summary: 게시판 카테고리 점수 저장
   *     tags: [Score]
   *     security:
   *       - bearerAuth: []
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               score_id:
   *                 type: string
   *                 description: Score 문서의 고유 ID
   *               score:
   *                 type: array
   *                 description: 각 카테고리의 점수 배열
   *                 items:
   *                   type: object
   *                   properties:
   *                     category:
   *                       type: string
   *                       description: 카테고리 이름
   *                     score:
   *                       type: number
   *                       description: 추가할 점수
   *     responses:
   *       200:
   *         description: 성공적으로 점수를 저장하고 수정된 Score 데이터를 반환합니다.
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 success:
   *                   type: boolean
   *                   description: 성공 여부를 나타내는 플래그
   *                 boardScore:
   *                   $ref: '#/components/schemas/Score'
   *       400:
   *         description: 요청이 잘못되었거나 필수 필드가 누락되었습니다.
   *       404:
   *         description: 해당 score_id에 해당하는 Score 데이터를 찾을 수 없습니다.
   *       500:
   *         description: 서버 내부 오류가 발생하여 요청을 처리할 수 없습니다.
   */
  route.post("/boardScoreSave", Auth, async (req, res) => {
    // console.log(req.body);
    const { score_id, score } = req.body;

    // console.log(score_id);
    try {
      // Score 모델에서 해당 scoreId에 해당하는 문서 가져오기
      const scoreData = await Score.findById(score_id);

      if (!scoreData) {
        return res.json({
          success: false,
          message: "Score 데이터를 찾을 수 없습니다.",
        });
      }

      // 각 카테고리별 점수 더하기
      score.forEach((item) => {
        const category = item.category;
        const score = item.score;

        if (category in scoreData) {
          scoreData[category].score += score;
        }
      });

      // 수정된 Score 데이터 저장
      await scoreData.save();

      // isCommentVoted 값 수정
      const boardData = await Board.findOne({ score_id: score_id });
      const userData = await User.findById(boardData.user_id);
      userData.isCommentVoted = true;
      userData.save();

      const userSendData = {
        userID: userData._id,
        isCommentVoted: userData.isCommentVoted,
      };

      // Score 모델에서 해당 scoreId에 해당하는 문서 가져오기
      const scoreSaveData = await Score.findById(score_id);

      return res.json({
        success: true,
        boardScore: scoreSaveData,
        userSendData: userSendData,
      });
    } catch (err) {
      Logger.error(err);
      return res.json({ success: false, err });
    }
  });

  /**
   * 시현용 - isCommentVoted 값 수정
   */
  route.put("/isCommentVotedFalse", async (req, res) => {
    try {
      // users 컬렉션의 isCommentVoted 값을 false로 업데이트
      await User.updateMany(
        {},
        { $set: { isCommentVoted: false, isCommentRewarded: false } }
      );
      return res.status(200).json({ success: true });
    } catch (err) {
      Logger.error(err);
      return res.json({ success: false, err });
    }
  });
};
