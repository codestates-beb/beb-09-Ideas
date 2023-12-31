import { Router } from "express";
import auth from "./routes/auth.js";
import wallet from "./routes/contract.js";
import user from "./routes/user.js";
import board from "./routes/board.js";

// guaranteed to get dependencies
export default () => {
  const app = Router();

  auth(app);
  wallet(app);
  user(app);
  board(app);

  return app;
};