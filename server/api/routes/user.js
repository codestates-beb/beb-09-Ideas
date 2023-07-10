import { Router } from "express";
import User from "./../../models/user.js";
import Score from "../../models/score.js";
import Board from "../../models/board.js";
import TokenAlgorithm from "../../models/tokenAlgorithm.js";
import {
  getTotalUserCount,
  calculateUserScore,
  getEtherPeice,
} from "../../services/user.js";

const route = Router();

export default (app) => {
  app.use("/user", route);

  /**
   * @swagger
   * tags:
   *   name: User
   * /user/profile/{id}:
   *   get:
   *     summary: 사용자 상세 정보 조회
   *     tags: [User]
   *     parameters:
   *       - in: path
   *         name: userId
   *         required: true
   *         description: 조회할 사용자의 id
   *         schema:
   *           type: string
   *     responses:
   *       '200':
   *         description: 사용자의 정보 반환 (작성한 게시글 정보는 배열로 반환)
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
   *                    $ref: '#/components/schemas/User_Data'
   *       '404':
   *         description: 사용자를 찾을 수 없음
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
   *     User_Data:
   *       type: object
   *       properties:
   *         userData:
   *           type: object
   *           properties:
   *             db_id:
   *               type: string
   *               description: DB에 지정해준 id (얘를 기준으로 db 조회)
   *             user_id:
   *               type: string
   *               description: 사용자가 회원가입시 입력한 id
   *             user_name:
   *               type: string
   *               description: 사용자 이름
   *             followers:
   *               type: number
   *               description: 사용자 팔로워 수
   *             created_at:
   *               type: string
   *               description: 사용자 생성일
   *             profile:
   *               type: object
   *               properties:
   *                 image_url:
   *                   type: string
   *                   description: 작성자 프로필 이미지 URL
   *                 title:
   *                   type: string
   *                   description: 작성자 프로필 이미지 제목
   *                 description:
   *                   type: string
   *                   description: 작성자 프로필 이미지 설명
   *         userScore:
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
   *         userBoard:
   *           type: object
   *           properties:
   *             _id:
   *               type: string
   *               description: 게시글 id
   *             title:
   *               type: string
   *               description: 게시글 제목
   *             category:
   *               type: string
   *               description: 게시글 카테고리명
   *             content:
   *               type: string
   *               description: 게시글 내용
   *             thumb_up:
   *               type: number
   *               description: 게시글 좋아요 수
   *             thumb_down:
   *               type: number
   *               description: 게시글 싫어요 수
   *             thumb_users:
   *               type: string
   *               description: 중복 방지 (사용x)
   *             user_id:
   *               type: string
   *               description: 게시글을 작성한 사람 id (사용x)
   *             view_count:
   *               type: string
   *               description: 게시글 조회수
   *             created_at:
   *               type: string
   *               description: 게시글 생성일
   *             score_id:
   *               type: string
   *               description: 게시글 점수 id (사용x)
   *             __v:
   *               type: number
   *               description: 데이터 버전 (사용x)
   */
  route.get("/profile/:id", async (req, res) => {
    const userId = req.params.id;
    console.log("userId");
    console.log(userId);

    try {
      // 사용자 정보 조회
      const userData = await User.findById(userId);
      console.log(userData);

      if (!userData) {
        return res
          .status(404)
          .json({ success: false, message: "사용자를 찾을 수 없습니다." });
      }

      // 사용자 점수 조회
      const userScore = await Score.findById(userData.score_id);
      console.log(userScore);

      // 사용자가 작성한 게시글 정보 조회
      const userBoard = await Board.find({ user_id: userId });
      console.log(userBoard);

      // 전송 데이터 생성
      const data = {
        userData: {
          db_id: userData._id,
          user_id: userData.id,
          user_name: userData.user_name,
          followers: userData.followers,
          created_at: userData.created_at,
          profile: {
            image_url: userData.profile.image_url,
            title: userData.profile.title,
            description: userData.profile.description,
          },
        },
        userScore: userScore,
        userBoard: userBoard,
      };

      return res.status(200).json({ success: true, data: data });
    } catch (err) {
      return res.status(500).json({ success: false, err });
    }
  });

  /**
   * 사용자 랭킹, 토큰 정보 출력
   */
  route.get("/rank", async (req, res) => {
    try {
      // mft 토큰 가격, 유저 능력치 계수, 보팅파워 계수 조회
      const tokenAlgorithmData = await TokenAlgorithm.findOne();

      // 이더리움 가격 조회
      const etherPrice = await getEtherPeice();

      // 총 유저 수
      const totalUserCount = await getTotalUserCount();

      // 능력치 높은 순으로 사용자 조회 (totalScore 기준)

      // 반환 데이터 생성
      const data = {
        mft_token_price: tokenAlgorithmData.mft_price,
        ether_price: etherPrice,
        total_user_count: totalUserCount,
        voting_power_coefficient: tokenAlgorithmData.tokenAlgorithmData,
        user_score_coefficient: tokenAlgorithmData.user_score_coefficient,
        //user_rank:
      };
      return res.status(200).json({ success: true, data: data });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ success: false, err });
    }
  });

  /**
   * 카테고리별 사용자 랭킹
   */
  route.get("/rank/:category", (req, res) => {
    // 카테고리 별로 순위도 출력해야함
  });
};
