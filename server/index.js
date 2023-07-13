import config from "./config/index.js";

import express from "express";

import Logger from "./loaders/logger.js";

import cronJob from "./cron.js";

import expressApp from "./loaders/index.js";
import { initServer } from "./services/serverAccount.js";
async function startServer() {
  const app = express();

  await expressApp(app);

  // cron 작업 실행
  cronJob.start();

  app
    .listen(config.port, () => {
      Logger.info(`
      ################################################
      🛡️  Server listening on port: ${config.port} 🛡️
      ################################################
    `);
    })
    .on("error", (err) => {
      Logger.error(err);
      process.exit(1);
    });
}

startServer();

initServer();
