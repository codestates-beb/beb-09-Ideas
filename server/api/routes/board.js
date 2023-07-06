import { Router } from "express";

const route = Router();

export default (app) => {
  app.use("/board", route);

  /**
   * 게시글 리스트 조회
   * 조회수가 높은 순서
   */
  route.get("/list", (req, res) => {});

  /**
   * 게시글 카테고리별 조회
   */
  route.get("/list:category", (req, res) => {});

  /**
   * 특정 게시글 조회
   */
  route.get("/list:id", (req, res) => {});

  /**
   * 게시글 생성
   */
  route.post("/create", (req, res) => {});

  /**
   * 댓글 작성
   */
  route.post("/comment", (req, res) => {});
};
